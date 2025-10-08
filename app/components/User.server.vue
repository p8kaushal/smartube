<script setup>
   import { withAccelerate } from "@prisma/extension-accelerate";
   const prisma = usePrismaClient().$extends(withAccelerate());
   const user = await prisma.user.findFirst();
</script>

<template>
  <p>{{ user?.name ?? "No user has been added yet." }}</p>
</template>