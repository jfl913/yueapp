<script setup>
const props = defineProps(['chromeExtensionName'])

import { onMounted } from 'vue'

let userId = ''
let email = ''
let priceId = ''
let chromeExtensionName = props.chromeExtensionName

onMounted(() => {
    // http://localhost:4173/ig-follower-export-tool.html?user_id=32de27b0-6c76-4bce-a100-012048b814b2&email=jfl913@outlook.com&price_id=pri_01hay5p34s30kyy77g867n1hws
    let currentUrl = window.location.href
    let params = new URL(currentUrl).searchParams
    userId = params.get('user_id')
    email = params.get('email')
    priceId = params.get('price_id')
    if (!userId || !email || !priceId || !chromeExtensionName) {
        console.log('Checkout: Missing params')
        console.log('userId: ' + userId)
        console.log('email: ' + email)
        console.log('priceId: ' + priceId)
        console.log('chromeExtensionName: ' + chromeExtensionName)
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
                priceId: priceId,
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
</script>

<template>
    <div>

    </div>
</template>

<style scoped></style>