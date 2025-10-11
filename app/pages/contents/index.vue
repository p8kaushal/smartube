<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'
import { useClipboard } from '@vueuse/core'
import { on } from 'events'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()
const { copy } = useClipboard()

const { data: contents } = await useFetch('/api/contents')

type Content = {
  id: string
  title: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
  url: string
  summary: string
}

// const data = ref<Content[]>([
//   {
//     id: '4600',
//     date: '2024-03-11T15:30:00',
//     status: 'paid',
//     email: 'james.anderson@example.com',
//     amount: 594
//   },
//   {
//     id: '4599',
//     date: '2024-03-11T10:10:00',
//     status: 'failed',
//     email: 'mia.white@example.com',
//     amount: 276
//   },
//   {
//     id: '4598',
//     date: '2024-03-11T08:50:00',
//     status: 'refunded',
//     email: 'william.brown@example.com',
//     amount: 315
//   },
//   {
//     id: '4597',
//     date: '2024-03-10T19:45:00',
//     status: 'paid',
//     email: 'emma.davis@example.com',
//     amount: 529
//   },
//   {
//     id: '4596',
//     date: '2024-03-10T15:55:00',
//     status: 'paid',
//     email: 'ethan.harris@example.com',
//     amount: 639
//   }
// ])



const selectedURL = ref('');
const selectedSummary = ref('');
const isURLDialogOpen = ref(false);
const isSummaryDialogOpen = ref(false);

const openURLDialog = (url) => {
  selectedURL.value = url;
  isURLDialogOpen.value = true;
};

const openSummaryDialog = (summary) => {
  selectedSummary.value = summary;
  isSummaryDialogOpen.value = true;
};

const columns: TableColumn<Content>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => `${row.getValue('title')}`
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-right' },
        h(
          UDropdownMenu,
          {
            content: {
              align: 'end'
            },
            items: getRowItems(row),
            'aria-label': 'Actions dropdown'
          },
          () =>
            h(UButton, {
              icon: 'i-lucide-ellipsis-vertical',
              color: 'neutral',
              variant: 'ghost',
              class: 'ml-auto',
              'aria-label': 'Actions dropdown'
            })
        )
      )
    }
  }
]

function getRowItems(row: Row<Content>) {
  return [
    {
      type: 'label',
      label: 'Actions'
    },
    {
      label: 'Copy URL',
      onSelect() {
        copy(row.original.url)

        toast.add({
          title: 'URL copied to clipboard!',
          color: 'success',
          icon: 'i-lucide-circle-check'
        })
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Watch',
      onSelect() {
        openURLDialog(row.original.url)
      }
    },
    {
      label: 'View summary',
      onSelect() {
        openSummaryDialog(row.original.summary)
      }
    }
  ]


}
</script>

<template>
  <!-- Dialog for URL Link -->
  <UModal v-model="isURLDialogOpen">
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">URL</h3>
      <UButton
        :to="selectedURL"
        target="_blank"
        class="text-blue-500 hover:underline"
      >
        {{ selectedURL }}
      </UButton>
    </div>
  </UModal>

  <!-- Dialog for Summary -->
  <UModal v-model="isSummaryDialogOpen">
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">Summary</h3>
      <p>{{ selectedSummary }}</p>
    </div>
  </UModal>

  <UTable :data="contents" :columns="columns" class="flex-1" />
</template>
