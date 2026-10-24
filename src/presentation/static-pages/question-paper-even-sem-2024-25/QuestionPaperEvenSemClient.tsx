"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { pdfData, schoolNames, getPDFName } from "./data";
import "./question-paper.css";

const schoolsList = [
    { value: "SOET", label: "School of Engineering & Technology" },
    { value: "SOMC", label: "School of Management & Commerce" },
    { value: "SOLS", label: "School of Legal Studies" },
    { value: "SMAS", label: "School of Medical & Allied Sciences" },
    { value: "SOLA", label: "School of Liberal Arts" },
    { value: "SOAD", label: "School of Architecture & Design" },
    { value: "SBAS", label: "School of Basic & Applied Sciences" },
    { value: "SJMC", label: "School of Journalism & Mass Communication" },
    {
        value: "SOHMCT",
        label: "School of Hotel Management & Catering Technology",
    },
    { value: "SOE", label: "School of Education" },
    { value: "SOAS", label: "School of Agricultural Sciences" },
];

export default function QuestionPaperEvenSemClient() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Outside click listener to close dropdown
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Handle "All Schools" checkbox
    const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsAllSelected(true);
            setSelectedCategories([]);
        }
    };

    // Handle individual school checkboxes
    const handleSchoolChange = (value: string, checked: boolean) => {
        let updated: string[];
        if (checked) {
            setIsAllSelected(false);
            updated = [...selectedCategories, value];
        } else {
            updated = selectedCategories.filter((item) => item !== value);
            if (updated.length === 0) {
                setIsAllSelected(true);
            }
        }
        setSelectedCategories(updated);
    };

    // Select box text logic
    const selectBoxText = useMemo(() => {
        if (isAllSelected) {
            return "All Schools";
        }
        if (selectedCategories.length === 0) {
            return "Select Schools";
        }
        return selectedCategories
            .map((val) => schoolNames[val] || val)
            .join(", ");
    }, [isAllSelected, selectedCategories]);

    // Filter PDFs logic (searches school, paper code, subject name, and file URL)
    const filteredPDFs = useMemo(() => {
        const query = searchText.trim().toLowerCase();
        const compactQuery = query.replace(/[^a-z0-9]/g, "");

        const categories = isAllSelected
            ? Object.keys(schoolNames).map((c) => c.toLowerCase())
            : selectedCategories.map((c) => c.toLowerCase());

        return pdfData
            .map((school) => {
                const categoryLower = school.category.toLowerCase();
                const matchesCategory = categories.includes(categoryLower);
                if (!matchesCategory) return null;

                // If no search text, return full school
                if (!query) return school;

                const schoolTitleLower = school.title.toLowerCase();
                const schoolNameLower = (
                    schoolNames[school.category] || ""
                ).toLowerCase();
                const matchesSchoolName =
                    schoolTitleLower.includes(query) ||
                    schoolNameLower.includes(query) ||
                    categoryLower === query;

                // Match individual paper URLs by name, code, or URL string
                const matchedUrls: string[] = [];
                const matchedUrlNames: string[] = [];

                school.urls.forEach((url, urlIndex) => {
                    const paperName = getPDFName(school, urlIndex, url);
                    const paperLower = paperName.toLowerCase();
                    const urlLower = url.toLowerCase();
                    const normalized = paperLower.replace(/[_\-.]/g, " ");
                    const compact = paperLower.replace(/[^a-z0-9]/g, "");

                    const matchesPaper =
                        matchesSchoolName ||
                        paperLower.includes(query) ||
                        urlLower.includes(query) ||
                        normalized.includes(query) ||
                        (compactQuery.length > 0 &&
                            compact.includes(compactQuery));

                    if (matchesPaper) {
                        matchedUrls.push(url);
                        if (school.urlName && school.urlName[urlIndex]) {
                            matchedUrlNames.push(school.urlName[urlIndex]);
                        }
                    }
                });

                if (matchedUrls.length === 0) return null;

                return {
                    ...school,
                    urls: matchedUrls,
                    urlName:
                        matchedUrlNames.length > 0 ? matchedUrlNames : undefined,
                };
            })
            .filter((school): school is (typeof pdfData)[0] => school !== null);
    }, [isAllSelected, selectedCategories, searchText]);

    return (
        <div>
            {/* HERO SECTION */}
            <section className="fb-hero">
                <div className="fb-hero-overlay"></div>
                <h1>Question Paper Even Sem 2024-25</h1>
            </section>

            <div className="filter-container">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search by school name or abbreviation..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <div
                    ref={dropdownRef}
                    className={`checkbox-dropdown ${isOpen ? "open" : ""}`}
                    id="categoryDropdown"
                >
                    <div
                        className="select-box"
                        tabIndex={0}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {selectBoxText}
                    </div>
                    <div className="checkbox-list">
                        <label>
                            <input
                                type="checkbox"
                                value="all"
                                checked={isAllSelected}
                                onChange={handleAllChange}
                            />{" "}
                            All Schools
                        </label>
                        {schoolsList.map((school) => (
                            <label key={school.value}>
                                <input
                                    type="checkbox"
                                    value={school.value}
                                    checked={
                                        !isAllSelected &&
                                        selectedCategories.includes(
                                            school.value
                                        )
                                    }
                                    onChange={(e) =>
                                        handleSchoolChange(
                                            school.value,
                                            e.target.checked
                                        )
                                    }
                                />{" "}
                                {school.label}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div id="pdfList">
                {filteredPDFs.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#888" }}>
                        No PDFs found.
                    </p>
                ) : (
                    filteredPDFs.map((school, index) => (
                        <div key={school.category} className="school-block">
                            <div className="school-title">
                                {index + 1}. {school.title}
                            </div>
                            {school.urls.map((url, urlIndex) => (
                                <div
                                    key={`${url}-${urlIndex}`}
                                    style={{ marginBottom: "8px" }}
                                    className="urlDownCon"
                                >
                                    <span style={{ fontWeight: "bold" }}>
                                        {index + 1}.{urlIndex + 1}
                                    </span>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdfUrl"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        {getPDFName(school, urlIndex, url)}
                                    </a>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download=""
                                        className="download-button"
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
