<script lang="ts">
  let activeTab: "arbeitnehmer" | "arbeitgeber" | "temporarburo" =
    "arbeitnehmer";
  import PrimaryButton from "$lib/PrimaryButton.svelte";
</script>

<div class="min-h-screen overflow-hidden w-full bg-white">
  <!-- Header -->
  <header
    class="fixed left-0 top-0 w-full z-[100] bg-white border-b border-gray-200 h-[67px] rounded-b-[12px] shadow-[0px_5px_15px_-9px_#00000029]"
  >
    <div
      class="absolute top-0 left-0 w-full h-[5px] bg-[linear-gradient(90deg,#319795,#3182CE)]"
    ></div>
    <div class="mx-auto px-4 py-4 flex justify-end h-full items-center">
      <button
        class="text-primary-teal hover:text-primary-teal/80 font-medium text-sm transition-colors"
      >
        Login
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <section
    class="hero-section w-full bg-[linear-gradient(102deg,#EBF4FF,#E6FFFA)] md:pt-[92px] md:pb-16"
  >
    <div class="px-0 md:px-4">
      <div
        class="flex flex-col md:flex-row max-w-5xl items-center justify-between md:w-[50%] md:mx-auto lg:-translate-x-[12.5%]"
      >
        <!-- Left Content -->
        <div class="w-full md:flex-1 text-center md:text-left pt-16">
          <h1
            class="text-[4rem] whitespace-nowrap mt-8 md:mt-0 md:text-2xl lg:text-4xl xl:text-[55px] xl:leading-[68px] tracking-wider font-medium md:font-bold sm: mb-8 lg:mb-14 md:-translate-y-3 2xl:-translate-y-10 text-[#2D3748] leading-tight"
          >
            Deine Job<br />website
          </h1>
          <!-- Mobile Hero Icon -->
          <div class="md:hidden flex flex-col items-center gap-6 mb-8">
            <img
              src="/mobile-hero-icon.svg"
              alt="Mobile hero icon"
              class="w-full max-w-full object-contain"
            />
          </div>
          <div class="hidden md:block md:-translate-y-5 2xl:-translate-y-10">
            <PrimaryButton
              label="Kostenlos Registrieren"
              cssClass={"max-w-[180px] max-sm:text-sm whitespace-nowrap lg:max-w-[240px] xl:max-w-[285px] h-[29px] lg:h-[36px] text-sm leading-[0.84px] w-full"}
            />
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="flex-1 sm:flex hidden justify-center pt-8">
          <div class="relative w-full aspect-square">
            <!-- Background Circle -->
            <div
              class="absolute inset-0 bg-white rounded-full opacity-80"
            ></div>

            <!-- Hero Illustration Image -->
            <div class="absolute inset-0 flex items-center justify-center">
              <img
                src="/hero-icon.png"
                alt="Handshake illustration"
                class="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="mobile-button block md:hidden">
    <PrimaryButton
      label="Kostenlos Registrieren"
      cssClass={"whitespace-nowrap max-w-[90%] mx-auto w-full"}
    />
  </div>

  <!-- Tabs Section -->
  <section class="py-0 md:pb-12 w-full bg-white">
    <div class="px-4"></div>
    <!-- Tab Buttons -->
    <div class="w-full h-auto overflow-x-scroll px-4 my-[25px]">
      <div
        class="flex flex-nowrap justify-center border border-[rgb(190 190 190)] w-fit mx-auto rounded-[16px] overflow-hidden"
      >
        <button
          on:click={() => (activeTab = "arbeitnehmer")}
          class="px-[22px] py-[8px] font-medium transition-all {activeTab ===
          'arbeitnehmer'
            ? 'bg-[#81e6d9] text-white shadow-md'
            : 'bg-white text-[#319795] hover:bg-gray-200'}"
        >
          Arbeitnehmer
        </button>
        <button
          on:click={() => (activeTab = "arbeitgeber")}
          class="px-[22px] py-[8px] font-medium border-x border-[rgb(224 224 224)] transition-all {activeTab ===
          'arbeitgeber'
            ? 'bg-[#81e6d9] text-white shadow-md'
            : 'bg-white text-[#319795] hover:bg-gray-200'}"
        >
          Arbeitgeber
        </button>
        <button
          on:click={() => (activeTab = "temporarburo")}
          class="px-[22px] py-[8px] font-medium transition-all {activeTab ===
          'temporarburo'
            ? 'bg-[#81e6d9] text-white shadow-md'
            : 'bg-white text-[#319795] hover:bg-gray-200'}"
        >
          Temporärbüro
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="text-center mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-[#4A5568] mt-12 font-normal tracking-tight"
      >
        Drei einfache Schritte<br />zu deinem neuen Job
      </h2>

      <!-- Steps Section -->
      <div class="step-section mt-12 py-6 max-w-[1920px] mx-auto">
        <!-- Step 1 -->
        <div class="w-full h-auto px-4">
          <div
            class="relative max-w-[930px] flex flex-col-reverse md:flex-row items-start md:items-start md:justify-between gap-8 xl:ml-[15%]"
          >
            <div
              class="flex z-20 w-[208px] h-[208px] rounded-full bg-[#F7FAFC] relative"
            >
              <div
                class="flex items-end gap-3 justify-center translate-x-[52px] -translate-y-[25px]"
              >
                <span
                  class="text-[90px] lg:text-[130px] font-medium text-[#718096] leading-none"
                  >1.</span
                >

                <p
                  class="hidden md:block text-[#718096] whitespace-nowrap text-lg lg:text-[30px] font-medium 2xl:mb-2"
                >
                  Erstellen dein Lebenslauf
                </p>
                <p
                  class="block md:hidden text-left text-[#718096] whitespace-nowrap text-lg sm:text-[30px] font-medium"
                >
                  Erstellen dein <br /> Unternehmensprofil
                </p>
              </div>
            </div>

            <div class="flex md:hidden -mb-32 max-w-[80%] z-40 ml-auto px-2">
              <img
                src="/first-icon.svg"
                alt="Schritt 1 Illustration"
                class="max-w-full w-full"
              />
            </div>

            <div
              class="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 hidden md:flex justify-center md:justify-end w-full md:w-auto"
            >
              <img
                src="/first-icon.svg"
                alt="Schritt 1 Illustration"
                class="max-w-xs md:max-w-sm w-full"
              />
            </div>
          </div>
        </div>

        <div
          class="relative hidden xl:block z-30 max-w-[450px] lg:max-w-[55%] 2xl:max-w-[970px] mx-auto -mb-40 -mt-8 -rotate-2"
        >
          <img src="./arrow-first.svg" alt="" />
        </div>

        <!-- Step 2 -->
        <div
          class="masked hidden relative rounded-[40px] bg-[linear-gradient(104deg,#E6FFFA,#EBF4FF)] pb-14 !pt-28 px-6 md:px-12 md:flex flex-col md:flex-row items-center md:justify-between gap-8 my-32 xl:my-0"
        >
          <div class="flex items-center max-w-5xl mx-auto gap-4 md:gap-6 z-10">
            <div class="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src="/second-icon.svg"
                alt="Schritt 2 Illustration"
                class="max-w-xs md:max-w-sm w-full"
              />
            </div>

            <div
              class="flex z-20 w-[208px] flex-col h-[208px] rounded-full relative"
            >
              <div class="w-full h-full flex items-center justify-center">
                <span
                  class="text-[90px] lg:text-[130px] font-medium text-[#718096] leading-none"
                  >2.</span
                >
              </div>
              <p
                class="text-[#718096] absolute bottom-6 lg:bottom-2 left-[70%] lg:left-[85%] whitespace-nowrap text-left text-lg lg:text-[30px] font-medium mb-10"
              >
                Erstellen dein <br class="hidden md:block xl:hidden" /> Lebenslauf
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Step 2 -->

        <div
          class="masked-mobile block md:hidden pt-12 pb-24 bg-[linear-gradient(104deg,#E6FFFA,#EBF4FF)]"
        >
          <div class="flex items-end justify-center gap-3">
            <span class="text-[90px] font-normal text-[#718096]">2.</span>
            <p
              class="font-normal text-[#718096] text-lg sm:text-[30px] mb-8 text-left"
            >
              Erhalte Vermittlungs- <br /> angebot von Arbeitgeber
            </p>
          </div>

          <div class="w-full h-auto mx-auto max-w-[80%] px-1">
            <img
              src="./sec2-mobile.svg"
              alt=""
              class="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div
          class="relative hidden xl:block z-30 max-w-[450px] xl:max-w-[400px] 2xl:max-w-xl mx-auto -mb-40 -mt-16"
        >
          <img src="./arrow-two.svg" alt="" />
        </div>

        <!-- Step 3 -->
        <div
          class="relative hidden xl:block rounded-[40px] py-10 px-6 md:px-12 md:flex flex-col md:flex-row items-center gap-8"
        >
          <div
            class="flex items-center justify-between max-w-5xl ml-auto 2xl:ml-[25%] gap-4 md:gap-6 z-10 flex-1"
          >
            <div class="relative top-12">
              <div
                class="w-[280px] h-[280px] bg-[#F7FAFC] pt-6 left-0 top-0 rounded-full flex items-start justify-center"
              >
                <span
                  class="text-[90px] lg:text-[130px] font-normal text-[#718096] leading-none"
                  >3.</span
                >

                <p
                  class="text-[rgb(133,152,173)] absolute top-[55px] lg:top-[60px] left-[65%] lg:left-[72%] text-left whitespace-nowrap text-lg lg:text-[30px] font-normal"
                >
                  Mit nur einem Klick <br class="hidden sm:block" /> bewerben
                </p>
              </div>
            </div>

            <div class="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src="/third-icon.svg"
                alt="Schritt 2 Illustration"
                class="max-w-xs md:max-w-lg w-full"
              />
            </div>
          </div>
        </div>

        <!-- Mobile Step 3 -->

        <div class="block md:hidden bg-white">
          <div class="flex items-end justify-center gap-3">
            <span class="text-[90px] sm:text-[130px] font-normal text-[#718096]"
              >3.</span
            >
            <p
              class="font-normal text-[#718096] text-lg sm:text-[30px] mb-8 text-left"
            >
              Vermittlung nach <br /> Provision oder <br /> Stundenlohn
            </p>
          </div>

          <div class="w-full h-auto mx-auto max-w-[80%] px-1">
            <img
              src="./mobile-step3.svg"
              alt=""
              class="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
