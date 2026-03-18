export function navigate(destination) {
    const element = document.getElementById(destination);
    const navBar = (document.getElementById("nav-bar"));
    const height = Math.ceil(navBar.getBoundingClientRect().height);


    console.log(height);
    if (element) {
        // window.scrollTo({
        //     top: element.offsetTop,
        //     behavior: "smooth",
        // });
        element.scrollIntoView({ behavior: "smooth" });

        // const y =
        //     element.getBoundingClientRect().top +
        //     window.scrollY -
        //     90;

        // window.scrollTo({
        //     top: y,
        //     behavior: "smooth",
        // });

    }
}