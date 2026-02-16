<script setup lang="ts">
import logoUrl from './assets/logo.jpg'
import facebookIcon from './assets/icons/facebook.svg'
import instagramIcon from './assets/icons/instagram.svg'
import poshmarkIcon from './assets/icons/poshmark.png'
import whatnotIcon from './assets/icons/whatnot.png'

type LinkItem = {
  label: string
  handle: string
  cta: string
  icon: string
  iconAlt: string
  url?: string
}

const links: LinkItem[] = [
  {
    label: 'Facebook',
    handle: 'houseofwendi',
    cta: 'Follow',
    icon: facebookIcon,
    iconAlt: 'Facebook logo',
    url: 'https://www.facebook.com/houseofwendi',
  },
  {
    label: 'Instagram',
    handle: '@house_of_wendi',
    cta: 'View feed',
    icon: instagramIcon,
    iconAlt: 'Instagram logo',
    url: 'https://www.instagram.com/house_of_wendi/',
  },
  {
    label: 'Poshmark',
    handle: '@wendimahaney',
    cta: 'Browse closet',
    icon: poshmarkIcon,
    iconAlt: 'Poshmark logo',
    url: 'https://poshmark.com/closet/wendimahaney',
  },
  {
    label: 'Whatnot',
    handle: 'House of Wendi',
    cta: 'Find us in the app',
    icon: whatnotIcon,
    iconAlt: 'Whatnot logo',
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 pb-10 pt-14 text-ink">
    <div
      class="pointer-events-none absolute -left-36 -top-28 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(201,124,146,0.3),rgba(201,124,146,0))] blur-[10px]">
    </div>
    <div
      class="pointer-events-none absolute -bottom-40 -right-32 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(201,124,146,0.3),rgba(201,124,146,0))] blur-[10px]">
    </div>

    <header class="relative z-10 flex max-w-2xl flex-col items-center gap-6 text-center animate-riseIn">
      <img class="rounded-full bg-white/80 px-5 py-4 shadow-soft w-[min(220px,70vw)]" :src="logoUrl"
        alt="House of Wendi logo" />
      <div class="grid gap-3">
        <p class="text-[0.75rem] uppercase tracking-[0.25em] text-rose-dark">House of Wendi</p>
        <h1 class="text-[clamp(2rem,3vw+1.5rem,3.4rem)] leading-tight">
          Beautiful Authentic Preloved Luxury Bags
        </h1>
        <p class="font-sans text-[1.05rem] text-cocoa">
          A cozy corner for timeless pieces, daily drops, and sweet surprises.
        </p>
      </div>
    </header>

    <section class="relative z-10 grid w-[min(680px,92vw)] gap-4" aria-label="House of Wendi social links">
      <a v-for="(link, index) in links" :key="link.label"
        class="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-rose/20 bg-white/85 px-6 py-5 shadow-soft transition hover:-translate-y-1 hover:border-rose-dark/45 hover:shadow-[0_24px_60px_rgba(78,53,49,0.2)] animate-cardIn sm:flex-row sm:items-center"
        :class="{ 'pointer-events-none opacity-60': !link.url }" :href="link.url || undefined"
        :target="link.url ? '_blank' : undefined" :rel="link.url ? 'noreferrer' : undefined"
        :tabindex="link.url ? 0 : -1" :aria-disabled="!link.url" :style="{ animationDelay: `${index * 90}ms` }">
        <div class="flex w-full items-center gap-4 sm:w-auto">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-[14px] border border-rose/40 bg-white text-rose-dark">
            <img class="h-6 w-6 object-contain" :src="link.icon" :alt="link.iconAlt" />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[1.05rem] font-semibold">{{ link.label }}</span>
            <span class="font-sans text-[0.95rem] text-cocoa">{{ link.handle }}</span>
          </div>
        </div>
        <span class="font-sans font-semibold text-rose-dark sm:self-auto">{{ link.cta }}</span>
      </a>
    </section>

    <footer class="relative z-10 text-center text-sm text-cocoa">
      <p>Thank you for supporting a small family business. © {{ year }}</p>
    </footer>
  </div>
</template>
