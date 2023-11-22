"use client";
// NextJS
import Image from "next/image";

// ReactJS
import { useForm } from "react-hook-form";
import { useState } from "react";

// NextUI
import { Button, Input } from "@nextui-org/react";

// Constants
import { uploadFileSchema } from "@constants/schemas";

// Yup
import { yupResolver } from "@hookform/resolvers/yup";

export default function Home() {
    // States
    const [file, setFile] = useState<File | null>(null);

    // Form
    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
    } = useForm({
        mode: "all",
        resolver: yupResolver(uploadFileSchema),
    });

    // Functions
    const onSubmit = async () => {
        // File
        if (!file) return;

        // FormData
        const formData = new FormData();

        formData.append("file", file);

        // Fetch
        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });
        
        const data = await res.json();   
        
        console.log(data);
    };

    const handleFile = (e: any) => {
        setFile(e?.target?.files[0]);
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <section className="w-1/2 h-1/2 flex flex-col justify-center items-center">
                <form
                    className="w-full h-full flex flex-col items-center gap-6 bg-slate-200 rounded-md p-4 shadow-md border-2 border-solid border-slate-300"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-3xl font-bold text-center">
                        Cargar Archivo
                    </h1>

                    <Input
                        {...register("file")}
                        className="w-full"
                        onChange={handleFile}
                        errorMessage={errors.file?.message}
                        isInvalid={!!errors.file}
                        type="file"
                    />

                    <Button
                        isDisabled={!isValid}
                        className="bg-violet-500 text-white rounded-md w-full"
                        type="submit"
                    >
                        Subir Archivo
                    </Button>

                    {file && (
                        <Image
                            alt="Image"
                            className="rounded-md shadow-md border-2 border-solid border-slate-300 object-cover"
                            height={300}
                            objectFit="cover"
                            src={URL.createObjectURL(file)}
                            width={300}
                        />
                    )}
                </form>
            </section>
        </main>
    );
}
