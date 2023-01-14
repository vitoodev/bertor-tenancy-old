<script>
    // import { goto } from '@sapper/app';
    import { onDestroy, onMount, } from 'svelte';
    // import { user } from '../../stores.js';
    
    let email = '';
    let password = '';
    
    onMount(async () => {
        // const response = await fetch('/api/user');
        // const data = await response.json();
        // user.set(data);
        // if (data) {
            // goto('/');
        // }
        console.log('mounted')

    });

    onDestroy(() => {
        console.log('destroeyds')  
    })
    
    async function login() {
        console.log('login', email, password)
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });
        // const data = await response.json();
        // user.set(data);
        // if (data) {
        //     goto('/');
        // }
    }
</script>

<h1>Login</h1>

<form method="POST" >
    <label for="email">Email</label>
    <input type="email" name="email" id="email" bind:value={email} />
    
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={password} />
    
    <button >Login</button>
    <a href="/">Cancel</a>
</form>
