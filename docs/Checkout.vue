<script setup>
import { onMounted } from 'vue'

let userId = ''
let email = ''
let chromeExtensionName = 'ig_follower_export_tool'

onMounted(() => {
    // http://localhost:4173/ig_follower_export_tool.html?user_id=32de27b0-6c76-4bce-a100-012048b814b2&email=jfl913@gmail.com
    let currentUrl = window.location.href;
    let params = new URL(currentUrl).searchParams;
    userId = params.get('user_id');
    email = params.get('email');
    if (!userId || !email) {
        console.log('userId: ' + userId)
        console.log('email: ' + email)
        return
    }

    Paddle.Environment.set("sandbox")
    Paddle.Setup({
        seller: 14576,
        eventCallback: function (data) {
            console.log('eventCallback')
            console.log(data)
            if (data.name == 'checkout.completed') {
                console.log('checkout.completed')
                console.log(data)
            }
        }
    })

    openCheckout()
})

function openCheckout() {
    Paddle.Checkout.open({
        settings: {
            theme: 'light',
            allowLogout: false
        },
        items: [
            {
                priceId: 'pri_01hay5p34s30kyy77g867n1hws',
                quantity: 1
            }
        ],
        customer: {
            email: email
        },
        customData: {
            'user_id': userId,
            'chrome_extension_name': chromeExtensionName
        }
    });
}

// This payment was declined by your bank.Please try again, or use a different payment method.Contact your bank for further information.

// let currentUrl = window.location.href;
// console.log(currentUrl);

</script>

<template>
    <div>

    </div>
</template>

<style scoped></style>