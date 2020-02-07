/*!
 * seo-helper.js
 * v1.0.3
 * <contact@tungu.me> (https://tungu.me)
 */
const colorLogDanger = "background:#FF2C30;color:white;margin:10px 0;padding:15px;border-radius:4px"
const colorLogWarning = "background:#F46F52;color:white;margin:10px 0;padding:15px;border-radius:4px"
const colorLogSuccess = "background:#68DB57;color:#070707;margin:10px 0;padding:15px;border-radius:4px;font-weight:bolder"


// Title page
const titlePage = document.title
if (!titlePage)
    console.log("%c The page has no title!", colorLogDanger)
else
    var titlePass = "ok"


// Description page
const descriptionPage = document.querySelector("meta[name='description']")
if (!descriptionPage)
    console.log("%cMeta 'description' does not exist!", colorLogDanger)
else if (descriptionPage.content === "")
    console.log("%cYour meta 'description' is empty!", colorLogDanger)
else
    var descriptionPass = "ok"


// Heading
const heading = document.querySelectorAll("h1")
if (heading.length > 1)
    console.log(`%cYou've got ${heading.length} headers, you only need one.`, colorLogWarning)
else
    var headingPass = "ok"

// Imgs
const imgPass = []
document.querySelectorAll("img").forEach(function (el) {
    const imgAlt = el.getAttribute("alt")[0]

    if (!imgAlt) {
        const imgSrc = el.getAttribute("src")
        console.log(`%c${imgSrc} does not have an alt attribute`, colorLogWarning)
        imgPass.push("No Alt")
    }
    else
        imgPass.push("ok")
})


// Sounds good
if (titlePass === "ok" && descriptionPass === "ok" && headingPass === "ok" && !imgPass.includes("No Alt"))
    console.log('%cSounds good, nice job!', colorLogSuccess)
