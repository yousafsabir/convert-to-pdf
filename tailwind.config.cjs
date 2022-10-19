/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "text-gradient":
                    "linear-gradient(135deg,#2c82ad,#2e83ac 9.99%,#3386a9 19.07%,#398ba5 27.44%,#41909f 35.26%,#489699 42.72%,#4f9c91 50%,#56a28a 57.28%,#5ba782 64.74%,#60ab7b 72.56%,#64af75 80.93%,#66b171 90.01%,#67b26f)",
                "container-gradient" :"linear-gradient(135deg,#4ca2cd,#4da2cc 9.99%,#4ea3c8 19.07%,#51a5c1 27.44%,#54a6b9 35.26%,#57a8b0 42.72%,#5baaa5 50%,#5eac99 57.28%,#61ae8d 64.74%,#63b082 72.56%,#65b178 80.93%,#67b272 90.01%,#67b26f)"
            },
            boxShadow: {
                "home-content":
                    "inset 0 1px 1px 0 hsla(0,0%,100%,.15),0 50px 100px -20px rgba(50,50,93,.3),0 30px 60px -30px rgba(0,0,0,.5),-10px 10px 60px -10px rgba(103,178,111,.3)",
            },
        },
    },
    plugins: [],
};
