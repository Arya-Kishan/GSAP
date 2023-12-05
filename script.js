let images = document.querySelectorAll("#page1 img")


// --------------------STACK CARDS
function stack() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#main",
            start: "20% 32%",
            end: "400% 32%",
            scrub: 1,
            // markers:true,
            pin: true,
        }
    })

    t1.to("#card2", {
        top: "1%",
    }, "a")

    t1.to("#card3", {
        top: "4%",
    }, "b")
    t1.to("#card2", {
        scale: .9,
    }, "b")

    t1.to("#card4", {
        top: "8%",
    }, "c")
    t1.to("#card3", {
        scale: .9,
    }, "c")
    t1.to("#card4", {
        scale: .9,
    }, "d")
}
stack()

function vibrateImg() {
    document.addEventListener("mousemove", (event) => {
        images.forEach((e) => {

            let pos = e.getAttribute("value")
            let x = Math.floor(Math.abs((window.innerWidth - event.x * pos) / 200));
            let y = Math.floor(Math.abs((window.innerHeight - event.y * pos) / 200));

            e.style.transform = `translateX(${x}px) translateY(${y}px)`

        })
    })
}
vibrateImg()

// function intro() {
//     let t3 = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#page2",
//             start: "20% 20%",
//             end: "100% 20%",
//             scrub: 1,
//             // markers: true,
//             pin: true,
//         }
//     })

//     t3.to("#page2 h1", {
//         x: "150%"
//     }, "a")
//     t3.to("#page2 h2", {
//         x: "-150%"
//     }, "a")
//     t3.to("#page2 img", {
//         // y:"-50%",
//         width: "98%",
//     }, "a")

//     t3.to("#cute p:nth-child(1)", {
//         x: "-85%",
//     }, "b")

//     t3.to("#cute p:nth-child(2)", {
//         x: "117%",
//     }, "c")

//     t3.to("#cute p:nth-child(3)", {
//         y: "-70%",
//     }, "d")

// }
// intro()

function scrollPage3() {
    let t4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            start: "1% 1%",
            end: "400% 1%",
            scrub: 1,
            // markers: true,
            pin: true,
        }
    })

    t4.to("#page3-div1", {
        y: "-100vh"
    }, 'a')
    t4.to("#page3-div2", {
        y: "-100vh"
    }, 'a')
    t4.to("#page3-circle", {
        backgroundColor: "yellow",
        rotate: 180,
        scale: 1.5
    }, 'a')
    t4.to("#page3-IMG", {
        x: "-50%",
        y: "-50%"
    }, 'a')

    t4.to("#page3-div2", {
        y: "-200vh"
    }, 'b')
    t4.to("#page3-div3", {
        y: "-200vh"
    }, 'b')
    t4.to("#page3-circle", {
        backgroundColor: "green",
        rotate: 360,
        scale: 3
    }, 'b')
    t4.to("#page3-img1", {
        left: "0%"
    }, 'b')

    t4.to("#page3-img1", {
        opacity: 0
    }, 'c')
    t4.to("#page3-IMG", {
        scale: 2.7,
        opacity: 1
    }, 'c')
    t4.to("#page3-left,#page3-right", {
        opacity: 0,
    }, 'c')
    t4.to("#page3", {
        backgroundColor: "black"
    }, 'c')

}
scrollPage3();



function Page4() {

    let t5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "0% 1%",
            end: "400% 1%",
            scrub: 2,
            // markers: true,
            pin: true,
        }
    })

    t5.to("#page4-circle",{
        scale:50,
    },'a')
    t5.to("#page4-circle",{
        scale:120,
    },'b')
    t5.to("#page4-text",{
        y:"-50%",
        scale:.1,
        opacity:.5,
    },'b')
    t5.to("#page4-text",{
        y:"-65%",
        scale:1,
        opacity:1,
    },'c')
}
Page4()


function Page5(){
    let t6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            start: "10% 10%",
            end: "400% 10%",
            scrub: 3,
            // markers: true,
            pin: true,
        }
    })

    t6.to("#page5-innerdiv1",{
        rotateX:"180deg",
    })
    t6.to("#page5-innerdiv2",{
        rotateY:"-180deg",
    })
    t6.to("#page5-innerdiv3",{
        rotateY:"180deg",
    })
    t6.to("#page5-innerdiv4",{
        rotateX:"-180deg",
    })
}
Page5()

function Page6(){
    let t7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            start: "10% 10%",
            end: "400% 10%",
            scrub: 2,
            // markers: true,
            pin: true,
        }
    })
    t7.to("#page6-div1-inner1",{
        x:"-100%"
    },'a')
    t7.to("#page6-div1-inner2",{
        x:"100%"
    },'a')
    t7.to("#page6-div2-inner1",{
        y:"-100%"
    },'b')
    t7.to("#page6-div2-inner2",{
        y:"100%"
    },'b')
    t7.to("#page6-div3 img",{
        scale:2
    },'c')
}
Page6()