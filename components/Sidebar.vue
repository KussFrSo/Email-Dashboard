<template>
  <NuxtScrollbar
    tag="aside"
    class="fixed h-screen hidden md:block md:w-72 border-r border-zinc-700 bg-zinc-900 shrink-0">
    <!-- @davestewart/nuxt-scrollbar package -->
    <nav class="flex flex-col gap-2 px-4 mt-10">
      <NuxtLink
        v-for="link in mainLinks"
        :key="link.title"
        class="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-primary-50 hover:bg-primary transition">
        <div class="flex items-center gap-3">
          <Icon :name="link.icon" size="18" />
          <span class="text-sm"> {{ link.title }}</span>
        </div>
        <span
          v-if="link.count"
          class="ml-auto text-xs opacity-70 group-hover:opacity-100">
          {{ link.count }}
        </span>
      </NuxtLink>
    </nav>

    <Divider class="mt-10" />

    <div class="px-4 my-10">
      <button @click="showLabels = !showLabels" class="flex items-center gap-3 w-full">
        <Icon
          class="transition duration-300"
          :class="[showLabels ? 'transform rotate-180' : '']"
          name="solar:alt-arrow-down-bold-duotone"
          size="18" />
        <span class="text-sm">Labels</span>
      </button>

      <Transition name="labels">
        <nav v-if="showLabels" class="flex flex-col gap-1 mt-5">
          <NuxtLink
            class="flex items-center justify-between rounded-lg p-2 hover:bg-zinc-700 transition"
            to="#"
            v-for="label in labels"
            :key="label.title">
            <div class="flex items-center gap-2">
              <span
                :class="[label.color]"
                class="inline-block w-2 h-2 rounded-full"></span>
              <span class="text-sm">{{ label.title }}</span>
            </div>
            <span
              v-if="label.count"
              class="ml-auto text-xs opacity-70 group-hover:opacity-100">
              {{ label.count }}
            </span>
          </NuxtLink>
        </nav>
      </Transition>
    </div>
  </NuxtScrollbar>
</template>

<script setup lang="ts">
  const showLabels = ref(true);

  const mainLinks = [
    { title: 'Inbox', icon: 'solar:inbox-bold-duotone', link: '#', count: 518 },
    { title: 'Starred', icon: 'solar:star-bold-duotone', link: '#', count: 10 },
    { title: 'Sent', icon: 'solar:plain-bold-duotone', link: '#', count: 213 },
    { title: 'Draft', icon: 'solar:file-bold-duotone', link: '#', count: 16 },
    { title: 'Attachment', icon: 'solar:paperclip-bold-duotone', link: '#', count: 105 },
    { title: 'Spam', icon: 'solar:shield-warning-bold-duotone', link: '#' },
    {
      title: 'Deleted',
      icon: 'solar:trash-bin-minimalistic-bold-duotone',
      link: '#',
      count: 55,
    },
    { title: 'Archived', icon: 'solar:archive-bold-duotone', link: '#', count: 518 },
  ];

  const labels = [
    { title: 'Work', color: 'bg-primary', count: 15 },
    { title: 'Personal', color: 'bg-amber-500', count: 5 },
    { title: 'Important', color: 'bg-red-600', count: 2 },
    { title: 'Urgent', color: 'bg-red-500' },
    { title: 'To Do', color: 'bg-yellow-500', count: 45 },
    { title: 'Later', color: 'bg-green-500', count: 65 },
  ];
</script>

<style scoped></style>
