<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { creators } from '../../metadata'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" mt-10 flex flex-col items-center>
          <h2 id="meet-the-team" font-normal op50 p="t-10 b-2">
            Members of Make-Up Work Club
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="small" :members="creators" flex justify-center />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
