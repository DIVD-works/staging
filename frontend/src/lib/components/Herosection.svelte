<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<section class="w-full px-3 lg:px-0 py-10 flex justify-center md:h-dvh">
    <article class="lg:w-[1100px] pt-12 md:pt-20">
        <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-black dark:text-white">
            The bridge 
            <span class="block">connector</span>
        </h1>
        <p class="text-xl/8 font-light mt-6 md:mt-10 w-full md:w-5/6 lg:w-2/3">
            The goal of the DIVD.works project is to create a platform that brings together young digital talent and 
            employers. We help you not only further develop your skills, but also find an internship or (part-time) job 
            that suits you. 
        </p>
        <br/>
        <p class="text-xl/8 font-light mb-6 md:mb-10 w-full md:w-5/6 lg:w-2/3">
            Finding an internship – or later a graduation internship – turns out to be quite a challenge, causing more and 
            more young people to give up. A shame, isn’t it? We aim to change that! Click the buttons below to get started.
        </p>
        <div class="grid grid-cols-12 w-full gap-5 text-white font-medium text-lg">
            <a href="/careers" class="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 w-auto h-10 rounded-3xl 
                bg-yellow-500 content-center transition-all hover:bg-yellow-400 dark:hover:bg-yellow-600">
                <button class="cursor-pointer w-full flex justify-center items-center group">
                    Platform for students 
                    <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="translate-x-3 
                        group-hover:translate-x-5 transition-all" 
                    />
                </button>
            </a>
            <a href="/" class="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 w-auto h-10 rounded-3xl bg-purple-500 
                content-center transition-all hover:bg-purple-400 dark:hover:bg-purple-600">
                <button class="cursor-pointer w-full flex justify-center items-center group">
                    Platform for companies 
                    <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="translate-x-3 
                        group-hover:translate-x-5 transition-all" 
                    />
                </button>
            </a>
        </div>
    </article>
</section>
