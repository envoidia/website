# how i surf the net
this is not a guide. it is a summary of the results of my research into browser security and privacy, formatted as if it were a guide. you may use it as a guide, but i am fallible and should not be trusted. do your own research

i believe that this method of browsing is appropriate for any tech-literate regular person that wants better privacy and security without compromising too much usability. it is not suitable for anyone that is under serious threat

### browser choice
balancing privacy and security is difficult. Google Chrome is easily the best option for security purely because it gets updated the fastest, but it's terrible for privacy. Firefox is better for privacy, but worse for security due to its lacking sandbox implementation (among other things)

i ended up choosing [Helium](https://helium.computer). it's Chromium-based, but very light and with good added protections

(this does not cover Android, but the ideal browser there is [Vanadium](https://github.com/GrapheneOS/Vanadium))

### configuration

- helium://settings
    - disable JavaScript optimization (JIT). the performance hit is negligible, and this removes a significant attack vector. if needed (unlikely), it can be selectively enabled for specific sites
    - change the DNS provider to https://dns.mullvad.net/dns-query

- helium://flags
    - enable "Helium Noise", "Canvas pixel noising", "Jitter audio context data", "Randomize number of CPU cores", "Remove Referrers", "Enable get*ClientRects() fingerprint deception", "Enable Canvas::measureText() fingerprint deception", and "Disable WebGL"
        - if you actually need WebGL (unlikely), enable "Spoof WebGL Info". disabling WebGL may be slightly worse for fingerprinting than if you leave it enabled and enable spoofing, but the removal of WebGL as an attack vector is (probably) worth it. additionally, most websites will fail to fetch WebGL info anyway due to disabled JavaScript

- uBlock Origin settings
    - check "Disable JavaScript" and "I am an advanced user". the advanced ui is a bit confusing at first, so refer to [this guide](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide)
    - globally block "3rd-party", "inline scripts", "1st-party scripts", "3rd-party scripts", and "3rd-party frames"
    - a surprising amount of sites will still function like this. when sites don't, ask yourself whether you absolutely need them. if you do, only whitelist the bare minimum, and avoid global whitelisting. avoid permanant allowances unless you use the site very often. this may be tedious at first, but as you fix the sites you use a lot, it'll stop requiring extra work

- other concerns
    - avoid changing settings that aren't necessary unless you're absolutely certain that sites can't tell they were changed and that they don't increase attack surface
    - avoid adding additional extensions. every extension is an additional trusted party, fingerprinting vector, and attack surface. if there are extensions that you absolutely need, at least keep them disabled when possible
    - password managers are not necessarily trustworthy. they add a trusted party, trusted privileged code, and effectively consolidate access to all of your passwords behind a single master password. ideally, use strong, unique passwords and memorize them or store them in encrypted local files
    - use a VPN. Mullvad is a good one. if you don't want to / can't pay, not using a VPN at all is (probably) better than using a free one (unless you have specific reason to believe your ISP will take issue with what you're doing). VPNs don't actually do nearly as much as many people have been led to believe; all you're doing is changing the trusted party from your ISP to the VPN provider and spoofing your location to sites
    - update ASAP for security patches
    - before sharing or opening urls, remove tracking (most (but not all) content after a `?`, such as `?si=abcdefgh`)

### sources and further reading
- https://madaidans-insecurities.github.io/firefox-chromium.html
- https://coveryourtracks.eff.org/learn
- https://grapheneos.org/usage#web-browsing
- https://github.com/RKNF404/chromium-hardening-guide/blob/main/pages/BROWSER_SELECTION.md
- https://medium.com/@thegrugq/tor-and-its-discontents-ef5164845908
