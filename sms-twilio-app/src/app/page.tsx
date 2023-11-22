"use client";
// ReactJS
import { useForm } from "react-hook-form";

// NextUI
import { Button, Input, Textarea } from "@nextui-org/react";

// Constants
import { smsSchema } from "@constants/schemas";

// Yup
import { yupResolver } from "@hookform/resolvers/yup";

// Sonner
import { toast } from "sonner";

export default function Home() {
    // Form
    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
    } = useForm({
        mode: "all",
        resolver: yupResolver(smsSchema),
    });

    // Functions
    const onSubmit = async (data: any) => {
        // SMS
        const SMS = {
            phone: data.phone,
            message: data.message,
        };

        // Fetch
        const res = await fetch("/api/sms", {
            method: "POST",
            body: JSON.stringify(SMS),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Response
        const response = await res.json();

        // Alert
        const promise = () => new Promise((resolve) => resolve(response));

        toast.promise(promise, {
            loading: "Enviando SMS...",
            success: "SMS Enviado correctamente",
            error: "Error al enviar el SMS"
        });
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <section className="w-1/2 h-1/2 flex flex-col justify-center items-center">
                <form
                    className="w-full h-full flex flex-col items-center gap-6 bg-slate-200 rounded-md p-4 shadow-md border-2 border-solid border-slate-300"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-3xl font-bold text-center">
                        Envio de SMS
                    </h1>

                    <label className="text-lg text-center">
                        Ingresa el número de celular al que deseas enviar el SMS
                    </label>

                    <Input
                        {...register("phone")}
                        className="w-full"
                        errorMessage={errors.phone?.message}
                        isInvalid={!!errors.phone}
                        label="Número de celular"
                        placeholder="Ingresa el número de celular"
                        type="tel"
                    />

                    <label className="text-lg text-center">
                        Ingresa el mensaje que deseas enviar al número de
                        celular
                    </label>

                    <Textarea
                        {...register("message")}
                        className="w-full"
                        errorMessage={errors.message?.message}
                        isInvalid={!!errors.message}
                        label="Mensaje"
                        placeholder="Ingresa el mensaje"
                    />

                    <Button
                        isDisabled={!isValid}
                        className="bg-violet-500 text-white rounded-md w-full"
                        type="submit"
                    >
                        Enviar SMS
                    </Button>
                </form>
            </section>
        </main>
    );
}
