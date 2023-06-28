<template>
    <form class="form">
        <p class="mb-2 mt-2">Sign in to your account</p>

        <div class="">
            <label class=" ">Login:</label>

            <div class="">
                <input class=" inputs text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="Enter login" />
            </div>
        </div>

        <div class="mb-2">
            <label for="password" class="">Password:</label>

            <div class="">
                <input type="password" class="inputs text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="••••••" />

            </div>
        </div>
        <div class="buttons flex    ">
            <button type="button"
                class="butSign rounded-xl h-10 px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black mr-2">
                Sign in
            </button>

            <button type="button"
                class="butSign rounded-xl h-10   px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black">
                Sign in
            </button>

        </div>

        <p class="">
            No account?
            <a class="cursor-pointer">Sign up</a>
        </p>
    </form>
</template>

<script>

export default {
    name: 'authoform'
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 100%;
}

.butSign {
    font-family: Tahoma, Arial, Verdana, sans-serif;
    font-size: 15px;
    padding-inline: 10px;
    background-color: #1b1a1d;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 10px;
}

.butSign:hover {
    background: #2c2b2f;
}

.inputs {
    background: #1b1a1d;
    outline: none;
}


.inputs:hover {
    background: #242327;
}


.inputs:focus {
    background: #2c2b2f;
}
</style>