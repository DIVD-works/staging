<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<form method="get" action="https://eu-submit.jotform.com/submit/253242909733056">
    <fieldset class="border-2 border-purple-500 rounded-2xl grid grid-cols-12 w-full gap-3 font-medium text-base sm:text-lg 
        p-4 sm:p-6">
        <legend class="text-black dark:text-white text-center text-xl sm:text-2xl">Contact information</legend>

        <p id="full_name" class="label_default">Full Name: </p>
        <div class="form_div md:col-span-6!">
            <input id="first_name" type="text" class="input_default mb-2" placeholder="Enter your First Name" 
                required aria-describedby="full_name first_name" name="q2_q2_fullname0[first]"
            />
            <small class="mb-0 md:mb-3">First Name</small>
        </div>
        <div class="form_div md:col-span-6!">
            <input id="last_name" type="text" class="input_default mb-2" placeholder="Enter your Last Name" 
                required aria-describedby="full_name last_name" name="q2_q2_fullname0[last]"
            />
            <small class="mb-3">Last Name</small>
        </div>

        <label for="company" class="label_default after:text-black! dark:after:text-white!">Company: </label>
        <input id="company" type="text" class="input_default col-span-12 caret-black! dark:caret-white!" 
            placeholder="Enter your Company" name="q3_q3_textbox1"
        />

        <label for="job_title" class="label_default after:text-black! dark:after:text-white!">Job Title: </label>
        <input id="job_title" type="text" class="input_default col-span-12 caret-black! dark:caret-white!" 
            placeholder="Enter your Job Title" name="q4_q4_textbox2"
        />

        <label for="email_address" class="label_default">E-mail Address: </label>
        <div class="form_div">
            <input id="email_address" type="email" class="input_default col-span-12 mb-2" 
                placeholder="Enter your E-mail Address" required name="q5_q5_email3"
            />
            <small class="mb-3">example@example.com</small>
        </div>

        <label for="phone_number" class="label_default after:text-black! dark:after:text-white!">Phone Number: </label>
        <div class="form_div">
            <input id="phone_number" type="tel" class="input_default col-span-12 caret-black! dark:caret-white!" 
                placeholder="(000) 000-0000" pattern="[0-9]{3} [0-9]{3}-[0-9]{4}" name="q6_q6_phone4[full]"
            />
            <small class="mb-3">Please enter a valid phone number.</small>
        </div>

        <label for="your_message" class="label_default">Your Message: </label>
        <textarea id="your_message" class="input_default h-48! col-span-12 py-3" placeholder="Enter your Message" required
            name="q7_q7_textarea5"></textarea>

        <div class="form_div flex-row!">
            <input id="agreement" type="checkbox" class="border border-black dark:border-white w-8 h-8 rounded-md 
                text-purple-500" required name="checkbox"
            />
            <label for="agreement" class="label_default col-auto! pl-3 mb-3">
                By submitting this form, you agree to the use of your information to fulfill your request and to be 
                contacted about other relevant content, services, and events. For more information, please see our 
                Privacy Notice.
            </label>
        </div>
        <div class="col-span-12 grid grid-cols-12 w-full gap-5 text-white font-medium text-lg">
            <button type="submit" class="col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3 cursor-pointer w-auto flex 
                justify-center items-center group h-10 rounded-3xl bg-purple-500 content-center transition-all 
                hover:bg-purple-400 dark:hover:bg-purple-600">
                {"Submit inquiry!".toUpperCase()}
                <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="translate-x-3 
                    group-hover:translate-x-5 transition-all" 
                />
            </button>
        </div>
    </fieldset>
</form>
