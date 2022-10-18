/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "text-gradient":
                    "linear-gradient(135deg,#2c82ad,#2e83ac 9.99%,#3386a9 19.07%,#398ba5 27.44%,#41909f 35.26%,#489699 42.72%,#4f9c91 50%,#56a28a 57.28%,#5ba782 64.74%,#60ab7b 72.56%,#64af75 80.93%,#66b171 90.01%,#67b26f)",
            },
            boxShadow: {
                "home-content":
                    "inset 0 1px 1px 0 hsla(0,0%,100%,.15),0 50px 100px -20px rgba(50,50,93,.3),0 30px 60px -30px rgba(0,0,0,.5),-10px 10px 60px -10px rgba(103,178,111,.3)",
            },
        },
    },
    plugins: [],
};
