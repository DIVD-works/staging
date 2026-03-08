<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { UnifiedContactField } from "./types";

    const field_values: <T>(value: T) => UnifiedContactField<T> = <T>(value: T): UnifiedContactField<T> => ({
        field: value,
        check: false,
        noerror: false,
        errormessage: "",
    });

    let form = $state({
        firstname: field_values<string>(""), 
        lastname: field_values<string>(""), 
        company: field_values<string>(""), 
        jobtitle: field_values<string>(""), 
        emailaddress: field_values<string>(""), 
        phonenumber: field_values<number>(0), 
        yourmessage: field_values<string>(""), 
        agreement: field_values<boolean>(false),
    });

    const textchars: RegExp = new RegExp("^[\\p{L}\\-\\s]+$", "u");
    const careerchars: RegExp = new RegExp("^[\\p{L}0-9\\-&!.@+,_:;#\\s]+$", "u");
    const emailchars: RegExp = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    const phonechars: RegExp = new RegExp("^\\d{3}\\d{3}\\d{4}$");
    const messagechars: RegExp = new RegExp("^[\\p{L}0-9\\-.,!?;:\"()@#$%&*+=/_\\[\\]{}|~<>^`\\s\\p{Emoji}]+$", "u");

    function check_field(
        field: string, 
        field_description: string, 
        regex_chars: RegExp, 
        minlength: number, 
        maxlength: number
    ): string {
        return (field == "") ? `${field_description} field is empty.` : 
            (field.length < minlength || field.length >= maxlength) ? 
            `${field_description} field contains to few/much characters.` : 
            (!regex_chars.test(field)) ? `${field_description} field contains illegal characters or has a wrong format.` : "";
    }

    $effect((): void => {
        form.firstname.errormessage = check_field(form.firstname.field, "Firstname", textchars, 2, 100);
        form.lastname.errormessage = check_field(form.lastname.field, "Lastname", textchars, 2, 100);
        form.company.errormessage = check_field(form.company.field, "Company", careerchars, 2, 100);
        form.jobtitle.errormessage = check_field(form.jobtitle.field, "Job Title", careerchars, 2, 100);
        form.emailaddress.errormessage = check_field(form.emailaddress.field, "E-mail Address", emailchars, 6, 250);
        form.phonenumber.errormessage = check_field(form.phonenumber.field.toString(), "Phone Number", phonechars, 10, 10);
        form.yourmessage.errormessage = check_field(form.yourmessage.field, "Your Message", messagechars, 50, 2500);
        form.agreement.errormessage = (!form.agreement.field) ? "Agreement Box wasn't checked." : "";

        form.firstname.check = (form.firstname.errormessage == "");
        form.lastname.check = (form.lastname.errormessage == "");
        form.company.check = (form.company.errormessage == "");
        form.jobtitle.check = (form.jobtitle.errormessage == "");
        form.emailaddress.check = (form.emailaddress.errormessage  == "");
        form.phonenumber.check = (form.phonenumber.errormessage == "");
        form.yourmessage.check = (form.yourmessage.errormessage == "");
        form.agreement.check = (form.agreement.errormessage == "") && form.firstname.check && form.lastname.check && 
            form.emailaddress.check && form.yourmessage.check;
    });
</script>

<form method="post" action="https://eu-submit.jotform.com/submit/253242909733056" onsubmit={
    (event: SubmitEvent): boolean | void => !form.agreement.check && event?.preventDefault()
}>
    <fieldset class="border-2 border-purple-500 rounded-2xl grid grid-cols-12 w-full gap-3 font-medium text-base sm:text-lg 
        p-4 sm:p-6">
        <legend class="text-black dark:text-white text-center text-xl sm:text-2xl">Contact information</legend>

        <p id="full_name" class="label_default">Full Name: </p>
        <div class="form_div md:col-span-6!">
            <input id="first_name" type="text" class="input_default mb-2" placeholder="Enter your First Name" 
                aria-describedby="full_name first_name" name="q2_q2_fullname0[first]" bind:value={form.firstname.field} 
                onblur={(): boolean => form.firstname.noerror = true}
            />
            <small class="mb-0 md:mb-3">First Name</small>
        </div>

        <div class="form_div md:col-span-6!">
            <input id="last_name" type="text" class="input_default mb-2" placeholder="Enter your Last Name" 
                aria-describedby="full_name last_name" name="q2_q2_fullname0[last]" bind:value={form.lastname.field} 
                onblur={(): boolean => form.lastname.noerror = true}
            />
            <small class="mb-3">Last Name</small>
        </div>
        {#if !form.firstname.check && form.firstname.noerror}
            <div class="error_default"><p class="error">{form.firstname.errormessage}</p></div>
        {/if}
        {#if !form.lastname.check && form.lastname.noerror}
            <div class="error_default"><p class="error">{form.lastname.errormessage}</p></div>
        {/if}

        <label for="company" class="label_default after:text-black! dark:after:text-white!">Company: </label>
        <input id="company" type="text" class="input_default col-span-12 caret-black! dark:caret-white!" 
            placeholder="Enter your Company" name="q3_q3_textbox1" bind:value={form.company.field} 
            onblur={(): boolean => form.company.field.length <= 0 ? form.company.noerror = false : form.company.noerror = true}
        />
        {#if !form.company.check && form.company.noerror}
            <div class="error_default"><p class="error">{form.company.errormessage}</p></div>
        {/if}

        <label for="job_title" class="label_default after:text-black! dark:after:text-white!">Job Title: </label>
        <input id="job_title" type="text" class="input_default col-span-12 caret-black! dark:caret-white!" 
            placeholder="Enter your Job Title" name="q4_q4_textbox2" bind:value={form.jobtitle.field} onblur={(): boolean => 
            form.jobtitle.field.length <= 0 ? form.jobtitle.noerror = false : form.jobtitle.noerror = true}
        />
        {#if !form.jobtitle.check && form.jobtitle.noerror}
            <div class="error_default"><p class="error">{form.jobtitle.errormessage}</p></div>
        {/if}

        <label for="email_address" class="label_default">E-mail Address: </label>
        <div class="form_div">
            <input id="email_address" type="email" class="input_default col-span-12 mb-2" 
                placeholder="Enter your E-mail Address" name="q5_q5_email3" bind:value={form.emailaddress.field} 
                onblur={(): boolean => form.emailaddress.noerror = true}
            />
            <small class="mb-3">example@example.com</small>
        </div>
        {#if !form.emailaddress.check && form.emailaddress.noerror}
            <div class="error_default"><p class="error">{form.emailaddress.errormessage}</p></div>
        {/if}

        <label for="phone_number" class="label_default after:text-black! dark:after:text-white!">Phone Number: </label>
        <div class="form_div">
            <input id="phone_number" type="tel" class="input_default col-span-12 caret-black! dark:caret-white!" 
                placeholder="Enter your Phone Number" name="q6_q6_phone4[full]" bind:value={form.phonenumber.field} 
                onblur={(): boolean => form.phonenumber.field.toString().length <= 0 ? 
                    form.phonenumber.noerror = false : form.phonenumber.noerror = true
                }
            />
            <small class="mb-3">1234567890</small>
        </div>
        {#if !form.phonenumber.check && form.phonenumber.noerror}
            <div class="error_default"><p class="error">{form.phonenumber.errormessage}</p></div>
        {/if}

        <label for="your_message" class="label_default">Your Message: </label>
        <textarea id="your_message" class="input_default h-48! col-span-12 py-3" placeholder="Enter your Message" 
            name="q7_q7_textarea5" bind:value={form.yourmessage.field} onblur={(): boolean => form.yourmessage.noerror = true}>
        </textarea>
        {#if !form.yourmessage.check && form.yourmessage.noerror}
            <div class="error_default"><p class="error">{form.yourmessage.errormessage}</p></div>
        {/if}

        <div class="form_div flex-row!">
            <input id="agreement" type="checkbox" class="border border-black dark:border-white w-8 h-8 rounded-md 
                text-purple-500" name="checkbox" bind:checked={form.agreement.field} 
                onblur={(): boolean => form.agreement.noerror = true}
            />
            <label for="agreement" class="label_default col-auto! pl-3 mb-3">
                By submitting this form, you agree to the use of your information to fulfill your request and to be 
                contacted about other relevant content, services, and events. For more information, please see our 
                Privacy Notice.
            </label>
        </div>
        {#if !form.agreement.check && form.agreement.noerror}
            <div class="error_default"><p class="error">{form.agreement.errormessage}</p></div>
        {/if}

        {#if form.agreement.check}
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
        {/if}
    </fieldset>
</form>
