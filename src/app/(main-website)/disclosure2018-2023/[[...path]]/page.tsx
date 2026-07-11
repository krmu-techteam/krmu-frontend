"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type R2File = {
  Key: string;
  Size?: number;
  LastModified?: string;
};

const R2_ROOT = "Main-disclosure2018-2023/disclosure2018-2023/";

export default function DisclosureBrowser() {
  const router = useRouter();
  const pathname = usePathname(); // /disclosure2018-2023/...

  /**
   * Convert URL → R2 path
   */
  const relativePath = decodeURIComponent(
    pathname.replace(/^\/disclosure2018-2023\/?/, "").replace(/\/$/, ""),
  );

  const r2Prefix = R2_ROOT + (relativePath ? `${relativePath}/` : "");

  const [folders, setFolders] = useState<string[]>([]);
  const [files, setFiles] = useState<R2File[]>([]);
  const [loading, setLoading] = useState(false);

  const PUBLIC_BASE = process.env.NEXT_PUBLIC_R2_PUBLIC_URL_DISCLOSURE;

  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/list-disclosure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prefix: r2Prefix }),
      });

      const data = await res.json();
      setFolders(data.folders || []);
      setFiles(data.files || []);
    } catch (err) {
      console.error("Disclosure load error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [r2Prefix]);

  const goBack = () => {
    if (!relativePath) return;

    const parts = relativePath.split("/").filter(Boolean);
    parts.pop();

    const nextPath = parts.join("/");
    router.push(
      nextPath
        ? `/disclosure2018-2023/${encodeURIComponent(nextPath)}`
        : "/disclosure2018-2023",
    );
  };

  return (
    <div className="pt-[140px] max-w-5xl mx-auto p-4">
      {/* HEADER */}
      <section className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title (NOT a link) */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            NAAC Cycle-1
          </h2>

          {/* Top List (ALL links) */}
          <ul className="list-disc pl-6 space-y-2 text-base text-black">
            <li>
              <Link
                href="https://pub-b137783ba90b4afdb568942321f7a1ef.r2.dev/Main-disclosure2018-2023/disclosure2018-2023/NAAC2024/NAAC-2024-Reports/IIQA-K.R._MANGALAM_UNIVERSITY_iiqa.pdf"
                target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:underline hover:text-blue-700"
              >
                Institutional Information for Quality Assessment (IIQA)
              </Link>
            </li>
            <li>
              <Link
                href="https://pub-b137783ba90b4afdb568942321f7a1ef.r2.dev/Main-disclosure2018-2023/disclosure2018-2023/NAAC2024/NAAC-2024-Reports/SSR-HRUNGN109306.pdf"
                target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:underline hover:text-blue-700"
              >
                Self Study Report
              </Link>
            </li>
            <li>
              <Link
                href="https://pub-b137783ba90b4afdb568942321f7a1ef.r2.dev/Main-disclosure2018-2023/disclosure2018-2023/NAAC2024/NAAC-2024-Reports/SSR-Prequalified-HRUNGN109306.pdf"
                target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:underline hover:text-blue-700"
              >
                Self Study Report (Prequalified)
              </Link>
            </li>
          </ul>

          {/* Divider */}
          <hr className="my-6 border-gray-300" />

          {/* SSR Documents */}
          <div>
            {/* Heading (NOT a link) */}
            <ul className="list-disc pl-6">
              <li className="font-semibold mb-3">SSR Documents</li>
            </ul>

            {/* Criteria Grid (ALL links) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-3 pl-12 text-black">
              <ul className="list-[circle] space-y-2">
                <li>
                  <Link
                    href="https://pub-b137783ba90b4afdb568942321f7a1ef.r2.dev/Main-disclosure2018-2023/disclosure2018-2023/NAAC2024/NAAC-2024-Reports/SSR-Prequalified-HRUNGN109306.pdf"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-700"
                  >
                    Extended Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 4
                  </Link>
                </li>
              </ul>

              <ul className="list-[circle] space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 5
                  </Link>
                </li>
              </ul>

              <ul className="list-[circle] space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 6
                  </Link>
                </li>
              </ul>

              <ul className="list-[circle] space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 3
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-700"
                  >
                    Criteria 7
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <hr className="mt-6 border-gray-300" />
        </div>
      </section>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          {relativePath && (
            <button onClick={goBack} className="mr-3 text-blue-600 font-medium">
              ◀ Back
            </button>
          )}
          <strong>Path:</strong>&nbsp;/disclosure2018-2023
          {relativePath && `/${relativePath}`}
        </div>

        <div className="text-sm text-gray-600">
          {loading
            ? "Loading…"
            : `${folders.length} folders • ${files.length} files`}
        </div>
      </div>

      {/* FOLDERS */}
      <div className="mb-6">
        {folders.map((folderPrefix) => {
          const relativeFolderPath = folderPrefix
            .replace(R2_ROOT, "")
            .replace(/\/$/, "");

          const folderName = relativeFolderPath.split("/").pop()!;

          return (
            <div
              key={folderPrefix}
              onClick={() =>
                router.push(
                  `/disclosure2018-2023/${encodeURIComponent(
                    relativeFolderPath,
                  )}`,
                )
              }
              className="cursor-pointer text-blue-600 py-1"
            >
              📁 {folderName}
            </div>
          );
        })}
      </div>

      {/* FILES */}
      <div>
        <h3 className="font-semibold mb-2">Files</h3>

        {files.length === 0 && (
          <div className="text-sm text-gray-500">No files</div>
        )}

        {files.map((file) => {
          const fileUrl = `${PUBLIC_BASE}/${encodeURI(file.Key)}`;
          return (
            <div key={file.Key} className="py-1">
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                📄 {file.Key.replace(r2Prefix, "")}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
