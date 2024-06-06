"use client";

import { validateConfig } from "next/dist/server/config-shared";
import { Url } from "next/dist/shared/lib/router/router";

interface FileUploadProps {
    onChange: (url?: string) => void
    value: string
    endpoint: "messageFile" | "serverImage"
}

export const FileUpload = () =>{
    onchange,
    value,
    endpoint
    return (
        <div>
            File upload component
        </div>
    )
}