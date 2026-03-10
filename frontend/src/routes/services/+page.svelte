<script lang="ts">
    import Community from "$lib/components/Community.svelte";
    import Contactform from "$lib/components/Contactform.svelte";
    import type { Card } from "$lib/components/types";
    import Icon from "@iconify/svelte";

    const service_card: Card[] = [
        {
            title: "Cybersecurity",
            description: "Protects your data, prevents breaches. Our cybersecurity approach combines continuous " + 
            "monitoring, proactive threat detection, and clear, actionable guidance to keep your organization protected " + 
            "around the clock.",
            icon: "mdi:encryption-check",
        },
        {
            title: "Open Source Support",
            description: "Simplifies adoption, boosts collaboration. We build with open-source technologies to ensure: " + 
            "full transparency, verifiable security, reproducibility and auditability and reduced risks and long-term cost " + 
            "savings. You stay in control, with no hidden layers or black-box dependencies.",
            icon: "mdi:computer",
        },
    ];
</script>

<svelte:head>
	<title>Services | DIVD.works</title>
    <meta name="description" content="DIVD.works is the bridge connector and a platform between students and companies. Explore your future internship and discover motivated talent today!" />
    <meta name="keywords" content="DIVD.works, platform, internship, talent" />
</svelte:head>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-purple-500">Business Services</h1>
            <h2 class="text-2xl md:text-3xl font-medium text-black dark:text-white mt-4">
                Do you need assistance urgently?
            </h2>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                <u class="text-black dark:text-white text-lg md:text-xl block">We’re here to help.</u> Our team is always 
                ready to assist you. Reach out to us via chat or through our contact form, and we’ll respond as soon as 
                possible.
            </p>
            <p class="text-lg/8 font-light w-full">
                <u class="text-black dark:text-white text-lg md:text-xl block">24/7 Emergency Incident Response.</u> If 
                you believe your organisation’s security may be compromised, call our incident hotline immediately: 
                +31##########.
            </p>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Assistance as a Service (Triple A)</h2>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                Our Assistance as a Service provides organizations with direct, on-demand access to expert guidance, support, 
                and problem-solving across the entire digital workspace. Instead of traditional ticket-based support, our 
                Triple A offer provides proactive, human-centered assistance that helps employees work securely, efficiently, 
                and with confidence. 
            </p>
            <p class="text-lg/8 font-light w-full">
                Our specialists anticipate issues, advise on best practices, and resolve challenges before 
                they escalate, ensuring continuity, reducing downtime, and strengthening overall digital resilience. With 
                Triple A, organizations gain a responsive, knowledgeable partner who is always ready to help. 
            </p>
        </article>
    </section>
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Other Services</h2>
            <h3 class="text-3xl font-medium text-black dark:text-white mt-4">
                Cyber-Resilient Digital Autonomous Workspace
            </h3>
            <p class="text-lg/8 font-light my-3 md:my-5 w-full">
                We can provide organizations with a secure, transparent and future-proof digital workspace that strengthens 
                cyber resilience while enhancing digital autonomy. Our service helps teams work safely and independently, 
                reduces vendor lock-in, and ensures full control over data and infrastructure. 
            </p>
            <div class="grid grid-cols-12 w-full gap-5 font-medium text-lg text-center">
                {#each service_card as card}
                    <article class="col-span-12 md:col-span-6 rounded-2xl bg-gray-200 dark:bg-gray-800 flex 
                        flex-col items-center px-4 py-8 transition-all scale-100 hover:scale-105 shadow-md">
                        <div class="w-full flex justify-center">
                            <Icon icon={card.icon} font-size="56" class="text-black dark:text-white" />
                        </div>
                        <h4 class="text-3xl font-medium text-purple-500 my-4">{card.title}</h4>
                        <p class="text-base/7 sm:text-lg/8 font-light w-full">{card.description}</p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Contact Us</h2>
            <p class="text-lg/8 font-light my-3 md:my-5 w-full">
                Please fill out this form to get in touch with us. We will use your information to respond to your inquiry 
                and keep you informed about relevant content, services, and events.
            </p>
            <Contactform />
        </article>
    </section>
    <Community />
</main>
