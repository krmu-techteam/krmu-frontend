"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type R2File = {
    Key: string;
    Size?: number;
    LastModified?: string;
};

const R2_ROOT = "Main-Krmu-QS/KRMU_QS/";

export default function KRMUQSBrowser() {
    const router = useRouter();
    const pathname = usePathname(); // /KRMU_QS/... (URL encoded)

    /**
     * Convert URL → R2 path
     * /KRMU_QS/Advanced%20Criteria → Advanced Criteria
     */
    const relativePath = decodeURIComponent(
        pathname.replace(/^\/KRMU_QS\/?/, "").replace(/\/$/, "")
    );

    const r2Prefix = R2_ROOT + (relativePath ? `${relativePath}/` : "");

    const [folders, setFolders] = useState<string[]>([]);
    const [files, setFiles] = useState<R2File[]>([]);
    const [loading, setLoading] = useState(false);

    const PUBLIC_BASE = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

    const loadData = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prefix: r2Prefix }),
            });

            const data = await res.json();
            setFolders(data.folders || []);
            setFiles(data.files || []);
        } catch (err) {
            console.error("R2 load error", err);
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
            nextPath ? `/KRMU_QS/${encodeURIComponent(nextPath)}` : "/KRMU_QS"
        );
    };

    return (
        <div className="pt-10 mt-[140px]">
            <div className="  max-w-5xl mx-auto p-4">
                {/* HEADER */}
                <div className="mb-4 flex  justify-between items-center">
                    <div className="flex text-white items-center">
                        {relativePath && (
                            <button
                                onClick={goBack}
                                className="mr-3 text-white font-medium"
                            >
                                ◀ Back
                            </button>
                        )}
                        <strong>Path:</strong>&nbsp;/KRMU_QS
                        {relativePath && `/${relativePath}`}
                    </div>

                    <div className="text-sm text-white">
                        {loading
                            ? "Loading…"
                            : `${folders.length} folders • ${files.length} files`}
                    </div>
                </div>

                {/* FOLDERS */}
                <div className="mb-6">
                    {folders.map((folderPrefix) => {
                        /**
                         * R2 folder prefix →
                         * Main-Krmu-QS/KRMU_QS/A/B/
                         */
                        const relativeFolderPath = folderPrefix
                            .replace(R2_ROOT, "")
                            .replace(/\/$/, "");

                        const folderName = relativeFolderPath.split("/").pop()!;

                        return (
                            <div
                                key={folderPrefix}
                                onClick={() =>
                                    router.push(
                                        `/KRMU_QS/${encodeURIComponent(relativeFolderPath)}`
                                    )
                                }
                                className="cursor-pointer text-white py-1"
                            >
                                📁 {folderName}
                            </div>
                        );
                    })}
                </div>

                {/* FILES */}
                <div>
                    <h3 className="font-semibold mb-2 text-white">Files</h3>

                    {files.length === 0 && (
                        <div className="text-sm text-white">No files</div>
                    )}

                    {files.map((file) => {
                        const fileUrl = `${PUBLIC_BASE}/${encodeURI(file.Key)}`;
                        return (
                            <div key={file.Key} className="py-1">
                                <a
                                    href={fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-white"
                                >
                                    📄 {file.Key.replace(r2Prefix, "")}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
