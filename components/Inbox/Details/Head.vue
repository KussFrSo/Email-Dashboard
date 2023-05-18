<template>
  <div class="flex items-center justify-end gap-3 py-5 px-3 border-b border-zinc-800">
    <button
      v-tooltip="'Help!'"
      class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon size="22" name="solar:question-circle-bold-duotone" />
    </button>
    <button
      v-tooltip="'Settings'"
      class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon size="22" name="solar:settings-bold-duotone" />
    </button>
    <button v-tooltip="'Menu'" class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon size="22" name="solar:menu-dots-square-bold-duotone" />
    </button>
    <img
      v-tooltip="'Profile'"
      src="https://www.citypng.com/public/uploads/preview/transparent-hd-white-male-user-profile-icon-11637133256qticy7lqml.png"
      alt="Logged in user"
      class="rounded-full ml-3 w-6 h-6 shrink-0 object-cover ring-1 ring-zinc-800/30" />
  </div>

  <div class="border-b border-zinc-800 px-3 py-3 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <button
        @click="emailOpen = false"
        v-tooltip="'Back'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:arrow-left-line-duotone" size="18" />
      </button>
      <button
        v-tooltip="'Archive'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:archive-check-line-duotone" size="18" />
      </button>
      <button
        v-tooltip="'Delete'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:trash-bin-minimalistic-line-duotone" size="18" />
      </button>
    </div>

    <div class="flex items-center gap-3">
      <button
        v-tooltip="'View previous'"
        class="text-zinc-500 cursor-not-allowed inline-flex items-center hover:text-zinc-200 transition">
        <Icon name="solar:round-alt-arrow-left-bold-duotone" size="20" />
      </button>
      <div class="text-xs text-zinc-400">1 of 485</div>
      <button
        v-tooltip="'View next'"
        class="text-zinc-200 inline-flex hover:text-zinc-200 transition">
        <Icon name="solar:round-alt-arrow-right-bold-duotone" size="20" />
      </button>
    </div>

    <div class="flex items-center gap-3">
      <button
        v-tooltip="'Print'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:printer-2-outline" size="18" />
      </button>
      <button
        v-tooltip="'Open in new window'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:arrow-right-up-line-duotone" size="18" />
      </button>
      <button
        v-tooltip="'More options'"
        class="text-zinc-500 hover:text-zinc-200 transition">
        <Icon name="solar:menu-dots-square-line-duotone" size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // state of selected message
  const emailOpen = useState<boolean>("emailOpen");
</script>
