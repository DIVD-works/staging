<script lang="ts">
    import { Route, Router } from "svelte-navigator";
    import DIVDWorks from "./assets/divd-works-logo.svg";
    import Footer from "./lib/Footer.svelte";
    import Header from "./lib/Header.svelte";
    import NotFound from "./lib/NotFound.svelte";
    import About from "./routes/about/About.svelte";
    import Careers from "./routes/careers/Careers.svelte";
    import CodeOfConduct from "./routes/code_of_conduct/CodeOfConduct.svelte";
    import Home from "./routes/home/Home.svelte";
    import How from "./routes/how/How.svelte";
    import Internships from "./routes/internships/Internships.svelte";
    import Investors from "./routes/investors/Investors.svelte";
    import Join from "./routes/join/Join.svelte";
    import Login from "./routes/login/Login.svelte";
    import PrivacyStatement from "./routes/privacy_statement/PrivacyStatement.svelte";
    import Projects from "./routes/projects/Projects.svelte";
    import Sustainability from "./routes/sustainability/Sustainability.svelte";
    import type { RoutePath } from "./types";

    const route_path: RoutePath[] = [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/how",
            component: How,
        },
        {
            path: "/join",
            component: Join,
        },
        {
            path: "/projects",
            component: Projects,
        },
        {
            path: "/about",
            component: About,
        },
        //{
        //path: "/login",
        //component: Login,
        //},
        {
            path: "/codeofconduct",
            component: CodeOfConduct,
        },
        {
            path: "/privacystatement",
            component: PrivacyStatement,
        },
        {
            path: "/internships",
            component: Internships,
        },
        {
            path: "/sustainability",
            component: Sustainability,
        },
        {
            path: "/investors",
            component: Investors,
        },
        {
            path: "/careers",
            component: Careers,
        },
        {
            path: "*",
            component: NotFound,
        },
    ];

    document.documentElement.lang = "en";
</script>

<svelte:head>
    <link rel="icon" href={DIVDWorks} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
</svelte:head>

<Router basepath="/" useHash={true}>
    <Header />
    <main class="w-full bg-white dark:bg-black">
        {#each route_path as { path, component }, _}
            <Route {path} {component} />
        {/each}
    </main>
    <Footer />
</Router>
