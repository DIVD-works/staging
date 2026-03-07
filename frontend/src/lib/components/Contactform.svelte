<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<form method="get"> <!-- action="https://form.jotform.com/253242909733056" -->
    <fieldset class="border-2 border-purple-500 rounded-2xl grid grid-cols-12 w-full gap-3 font-medium text-base sm:text-lg 
        p-4 sm:p-6">
        <legend class="text-black dark:text-white text-center text-xl sm:text-2xl">Contact information</legend>

        <label for="full_name" class="col-span-11 after:content-['_*'] after:text-red-500">Full Name: </label>
        <div class="col-span-12 md:col-span-6 flex flex-col">
            <input id="first_Name" type="text" class="border border-black dark:border-white h-12 rounded-md 
                placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-2" 
                placeholder="Enter your First Name" required
            />
            <small class="mb-0 md:mb-3">First Name</small>
        </div>
        <div class="col-span-12 md:col-span-6 flex flex-col">
            <input id="last_name" type="text" class="border border-black dark:border-white h-12 rounded-md 
                placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-2" 
                placeholder="Enter your Last Name" required
            />
            <small class="mb-3">Last Name</small>
        </div>

        <label for="company" class="col-span-11 after:content-['_*'] after:text-black dark:after:text-white">
            Company: 
        </label>
        <input id="company" type="text" class="border border-black dark:border-white h-12 rounded-md col-span-12 
            placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-3" 
            placeholder="Enter your Company" 
        />

        <label for="job_title" class="col-span-11 after:content-['_*'] after:text-black dark:after:text-white">
            Job Title: 
        </label>
        <input id="job_title" type="text" class="border border-black dark:border-white h-12 rounded-md col-span-12 
            placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-3" 
            placeholder="Enter your Job Title" 
        />

        <label for="email_address" class="col-span-11 after:content-['_*'] after:text-red-500">E-mail Address: </label>
        <div class="col-span-12 flex flex-col">
            <input id="email_address" type="email" class="border border-black dark:border-white h-12 rounded-md col-span-12
                placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-2" 
                placeholder="Enter your E-mail Address" required
            />
            <small class="mb-3">example@example.com</small>
        </div>

        <label for="phone_number" class="col-span-11 after:content-['_*'] after:text-black dark:after:text-white">
            Phone Number: 
        </label>
        <div class="col-span-12 flex flex-col">
            <input id="phone_number" type="tel" class="border border-black dark:border-white h-12 rounded-md col-span-12
                placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white px-3 mb-3" 
                placeholder="(000) 000-0000" pattern="[0-9]{3} [0-9]{3}-[0-9]{4}"
            />
            <small class="mb-3">Please enter a valid phone number.</small>
        </div>

        <label for="your_message" class="col-span-11 after:content-['_*'] after:text-red-500">Your Message: </label>
        <textarea id="your_message" class="border border-black dark:border-white h-48 rounded-md col-span-12
            placeholder:text-neutral-700 placeholder:dark:text-neutral-300 text-black dark:text-white p-3 mb-3" 
            placeholder="Enter your Message" required
        ></textarea>

        <div class="col-span-12 flex">
            <input id="agreement" type="checkbox" class="border border-black dark:border-white w-8 h-8 rounded-md 
                text-purple-500" required 
            />
            <label for="agreement" class="after:content-['_*'] after:text-red-500 pl-3 mb-3">
                By submitting this form, you agree to the use of your information to fulfill your request and to be 
                contacted about other relevant content, services, and events. For more information, please see our 
                Privacy Notice.
            </label>
        </div>
        <div class="col-span-12 grid grid-cols-12 w-full gap-5 text-white font-medium text-lg">
            <a href="https://form.jotform.com/250672969917070" target="_blank" class="col-span-12 sm:col-span-5 md:col-span-4
                lg:col-span-3 w-auto h-10 rounded-3xl bg-purple-500 content-center transition-all hover:bg-purple-400 
                dark:hover:bg-purple-600">
                <button type="submit" class="cursor-pointer w-full flex justify-center items-center group">
                    {"Submit inquiry!".toUpperCase()}
                    <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="translate-x-3 
                        group-hover:translate-x-5 transition-all" 
                    />
                </button>
            </a>
        </div>
    </fieldset>
</form>
