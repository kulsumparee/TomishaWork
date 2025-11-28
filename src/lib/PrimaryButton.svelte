<script lang="ts">
  export let label: string;
  export let type: "button" | "submit" | "reset" = "button";
  export let href: string | null = null;
  export let cssClass: string = "";
</script>

{#if href}
  <a
    {href}
    class="inline-flex items-center justify-center bg-gradient-to-r from-[#319795] to-[#3183cc] hover:brightness-95 text-white font-medium px-[60px] py-[12px] rounded-[16px] min-w-[288px] transition-all shadow-md"
  >
    {label}
  </a>
{:else}
  <button
    {type}
    class={`inline-flex items-center justify-center bg-gradient-to-r from-[#319795] to-[#3183cc] hover:brightness-95 text-white font-medium px-[60px] py-[8px] rounded-[12px] transition-all shadow-md ${cssClass}`}
  >
    {label}
  </button>
{/if}
