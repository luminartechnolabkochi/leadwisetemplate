import React, { useState } from 'react'

function Login() {

    let [user, setUser] = useState({ username: "", password: "" })


        function handleSubmit(e){
            e.preventDefault()
            console.log(user);
            
        }

    return (
        <div>

            <div class="login-shell">


                {/* <!-- ── Left: Brand Panel ── --> */}
                <aside class="login-brand">


                    {/* <!-- Logo --> */}
                    <div class="login-brand-logo">
                        <div class="login-brand-logo-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <span class="login-brand-logo-text">Lead<span>Flow</span></span>
                    </div>


                    {/* <!-- Hero copy --> */}
                    <div class="login-brand-body">
                        <h1 class="login-brand-heading">
                            Turn leads into<br /><em>revenue, faster.</em>
                        </h1>
                        <p class="login-brand-desc">
                            LeadFlow gives your sales team a single place to capture, qualify, and close every lead — with real-time visibility from first touch to signed deal.
                        </p>


                        {/* <!-- Feature list --> */}
                        <div class="login-features">
                            <div class="login-feature">
                                <div class="login-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                </div>
                                <span class="login-feature-text">Live pipeline tracking &amp; analytics</span>
                            </div>
                            <div class="login-feature">
                                <div class="login-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <span class="login-feature-text">Automated follow-up reminders</span>
                            </div>
                            <div class="login-feature">
                                <div class="login-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                <span class="login-feature-text">Role-based access &amp; audit logs</span>
                            </div>
                            <div class="login-feature">
                                <div class="login-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                </div>
                                <span class="login-feature-text">Budget &amp; conversion reporting</span>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Footer --> */}
                    <p class="login-brand-footer">&copy; 2025 LeadFlow. All rights reserved.</p>

                </aside>


                {/* <!-- ── Right: Form Panel ── --> */}
                <main class="login-form-panel">
                    <div class="login-form-wrap">


                        {/* <!-- Form header --> */}
                        <div class="login-form-header">
                            <p class="login-form-eyebrow">Admin Portal</p>
                            <h2 class="login-form-title">Welcome back</h2>
                            <p class="login-form-subtitle">Sign in to your LeadFlow admin account to manage your pipeline.</p>
                        </div>


                        {/* <!-- Error alert (hidden by default — React will toggle visibility) --> */}
                       

                        <div class="login-divider">
                            <span class="login-divider-line"></span>
                        </div>


                        {/* <!-- Login form --> */}
                        <form onSubmit={handleSubmit} class="login-fields">


                            {/* <!-- Username --> */}
                            <div class="form-group">
                                <label for="username">Username <span class="required">*</span></label>
                                <div class="input-icon-wrap">
                                    <span class="input-icon-lead">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </span>
                                    <input
                                    onChange={(e)=>setUser({...user,username:e.target.value})}
                                        type="text"
                                        id="username"
                                        name="username"
                                        class="input-has-icon"
                                        placeholder="e.g. admin"
                                        autocomplete="username"
                                    />
                                </div>
                            </div>


                            {/* <!-- Password --> */}
                            <div class="form-group">
                                <div class="label-row">
                                    <label for="password">Password <span class="required">*</span></label>
                                    <a href="#" class="label-link">Forgot password?</a>
                                </div>
                                <div class="input-icon-wrap">
                                    <span class="input-icon-lead">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </span>

                                     <input
                                    onChange={(e)=>setUser({...user,password:e.target.value})}
                                        type="text"
                                        id="password"
                                        name="username"
                                        class="input-has-icon"
                                        placeholder="enter your password"
                                        autocomplete="current-password"
                                    />
                                   
                                    <button type="submit" class="input-icon-trail" aria-label="Toggle password visibility">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                    </button>
                                </div>
                            </div>


                            {/* <!-- Remember me --> */}
                            <div class="checkbox-row">
                                <input type="checkbox" id="remember" name="remember" />
                                <label class="checkbox-label" for="remember">Keep me signed in for 30 days</label>
                            </div>


                            {/* <!-- Submit --> */}
                            <button type="submit" class="btn btn-primary btn-login">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
                                Sign In to Admin
                            </button>

                        </form>
                        {/* <!-- /.login-fields --> */}


                        {/* 
                        // <!-- Security notice --> */}
                        <div class="login-security">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            <span class="login-security-text">Protected by 256-bit SSL encryption</span>
                        </div>

                    </div>
                    {/* <!-- /.login-form-wrap --> */}
                </main>

            </div>
            {/* <!-- /.login-shell --> */}



        </div>
    )
}

export default Login
