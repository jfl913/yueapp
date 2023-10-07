<script setup>
const props = defineProps(['chromeExtensionName'])

import { onMounted } from 'vue'

let userId = ''
let email = ''
let priceId = ''
let chromeExtensionName = props.chromeExtensionName

onMounted(() => {
    // https://yueapps.uk/ig-follower-export-tool.html?user_id=32de27b0-6c76-4bce-a100-012048b814b2&email=jfl913%40gmail.com&price_id=pri_01hak0nkte88ymsnrbvcv6byzb
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

    // Paddle.Environment.set("sandbox")
    Paddle.Setup({
        seller: 176437,
        eventCallback: function (data) {
            console.log('eventCallback', data)
            if (data.name == 'checkout.completed') {
                console.log('checkout.completed')
            } else if (data.name == 'checkout.closed') {
                history.replaceState(null, null, getBeforeQuestionMark(window.location.href))
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

// 定义一个函数，接受一个 URL 作为参数
function getBeforeQuestionMark(url) {
    // 使用 indexOf 方法找到问号的位置
    let index = url.indexOf("?");
    // 如果找不到问号，返回整个 URL
    if (index === -1) {
        return url;
    }
    // 否则，使用 slice 方法截取问号前面的部分，并返回
    else {
        return url.slice(0, index);
    }
}

</script>

<template>
    <div>

    </div>
</template>

<style scoped></style>