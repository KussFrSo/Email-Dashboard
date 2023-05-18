<template>
    <NuxtScrollbar class="md:w-full h-screen ">
        <InboxHead />

        <div class="md:p-7 px-3 py-5 max-w-6xl space-y-2">
            <div @click="emailOpen = !emailOpen" v-for="email in emails" class="p-5 rounded-lg hover:bg-zinc-800/20 cursor-pointer">
                <div class="flex items-center justify-between">
                    <p class="text-sm"> {{ email.subject }}</p>
                    <p class="text-xs text-zinc-400"> {{ email.time }}</p>
                </div>
                <div class="text-sm mt-3 text-zinc-500 line-clamp-2">
                    <p> {{ email.content }}</p>
                </div>
                <!-- <div v-if="email.attachments" class="mt-5 flex justify-between">
                    <div class="flex items-center gap-3 text-xs text-zinc-300 bg-zinc-900 p-2 rounded-lg">
                        <img :src="getMaterialFileIcon(email.attachments)" :alt="email.attachments" class="object-contain h-4">
                        <span> {{ email.attachments }}</span>
                    </div>
                </div> -->
            </div>
        </div>
    </NuxtScrollbar>
</template>

<script setup lang="ts">
import { getMaterialFileIcon } from "file-extension-icon-js";
const emailOpen = useState("emailOpen", () => false) // Estado global para acceder desde otros componentes

const emails = [
    {   
        id:1,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.pdf"
    },
    {
        id:2,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.png"
    },
    {
        id:3,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.csv"
    },
    {
        id:4,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.txt"
    },
    {
        id:5,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.xml"
    },
    {
        id:6,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.edi"
    },
    {
        id:7,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.json"
    },
    {
        id:8,
        subject:"Entrevista - WheelHub",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "12:01",
        attachments:"Onboarding.url"
    },
]

</script>