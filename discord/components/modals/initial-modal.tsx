"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle

} from "@/components/ui/dialog"

const fromSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required."
    }),
    imageUrl: z.string().min(1, {
       message: "Server image is required."
    })
})


export const InitialModal = () => {
    
    const form = useForm({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            name: "",
            imageUrl: "",

        }
    })
    
    return(
        <Dialog open>
            <DialogHeader className=" pt-8 px-6">
                <DialogTitle className=" text-2xl  text-center">
                    Customize your server
                </DialogTitle>
                <DialogDescription className=" text-center text-zinc-500">
                    Give your server a personality with a name and an image.
                    You can always change it later.
                </DialogDescription>
            </DialogHeader>

        </Dialog>
    )
}