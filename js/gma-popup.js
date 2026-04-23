/* ============================================================
   GMA POPUP JS — GrowMore Appliance
   Link karo: <script src="gma-popup.js"></script>
   Body ke closing tag </body> se pehle lagao
   ============================================================ */

(function () {

    /* ── Category data ── */
    var GMA_DATA = {
        air_conditioner: {
            label: 'Air Conditioner Services',
            img: 'images/project11.png',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="9" width="28" height="11" rx="3.5" fill="#378ADD"/><rect x="2" y="15" width="28" height="5" rx="2" fill="#185FA5"/><circle cx="8" cy="14" r="1.8" fill="#fff"/><circle cx="14" cy="14" r="1.8" fill="#fff"/><circle cx="20" cy="14" r="1.8" fill="#fff"/><path d="M8 20 Q9.5 25 8 29" stroke="#378ADD" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M16 20 Q17.5 25 16 29" stroke="#378ADD" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M24 20 Q25.5 25 24 29" stroke="#378ADD" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>',
            services: [
                'Window AC Jet Service',
                'Split AC Jet Service',
                'Window AC Installation',
                'Split AC Installation',
                'Window AC Dismantle',
                'Split AC Dismantle',
                'Split AC Only Outdoor Re-Installation',
                'Split AC Only Indoor Re-Installation',
                'Split AC Water Leakage Problem',
                'AC Labour Charges in Breakdown Condition'
            ]
        },
        washing_machine: {
            label: 'Washing Machine Services',
            img: 'images/project33.jpg',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="3" width="22" height="26" rx="3.5" fill="#5DCAA5"/><rect x="5" y="3" width="22" height="9" rx="3.5" fill="#1D9E75"/><circle cx="16" cy="20" r="6.5" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1.5"/><circle cx="16" cy="20" r="3.5" fill="#5DCAA5"/><circle cx="9" cy="7" r="1.5" fill="#E1F5EE"/><rect x="13" y="5.5" width="7" height="2.5" rx="1.25" fill="#E1F5EE"/></svg>',
            services: [
                'Semi Automatic / Fully Automatic Top Load Labour Charge',
                'Fully Automatic Front Load Labour Charge'
            ]
        },
        Refrigerators: {
            label: 'Refrigerator Services',
            img: 'images/project22.png',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="2" width="16" height="28" rx="3.5" fill="#85B7EB"/><rect x="8" y="2" width="16" height="14" rx="3.5" fill="#378ADD"/><line x1="8" y1="16" x2="24" y2="16" stroke="#185FA5" stroke-width="1.5"/><rect x="11" y="8" width="2.5" height="5" rx="1.25" fill="#E6F1FB"/><rect x="11" y="20" width="2.5" height="7" rx="1.25" fill="#E6F1FB"/></svg>',
            services: [
                'Single Door Service / Labour Charge',
                'Double Door Service / Labour Charge'
            ]
        },
        Microwave: {
            label: 'Microwave Services',
            img: 'images/project55.png',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="9" width="28" height="15" rx="3.5" fill="#EF9F27"/><rect x="5" y="12" width="16" height="9" rx="2" fill="#FAEEDA"/><rect x="23" y="12" width="5" height="9" rx="1.5" fill="#BA7517"/><circle cx="25.5" cy="15" r="1.5" fill="#EF9F27"/><circle cx="25.5" cy="19" r="1.5" fill="#EF9F27"/><path d="M9 15.5 Q13 17 17 15.5" stroke="#EF9F27" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M9 19 Q13 20.5 17 19" stroke="#EF9F27" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>',
            services: [
                'Microwave Service / Labour Charge'
            ]
        },
        LED: {
            label: 'LED TV Services',
            img: 'images/project66.png',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="28" height="18" rx="2.5" fill="#2C2C2A"/><rect x="4" y="7" width="24" height="14" rx="1.5" fill="#378ADD" opacity=".55"/><rect x="12" y="23" width="8" height="2.5" fill="#2C2C2A"/><rect x="9" y="25.5" width="14" height="1.8" rx=".9" fill="#888780"/></svg>',
            services: [
                'LED TV Service Charge & Installation up to 32"',
                'LED TV Service Charge & Installation up to 65"'
            ]
        },
        Geyser: {
            label: 'Geyser Services',
            img: 'images/project77.jpg',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="5" width="10" height="18" rx="5" fill="#F0997B"/><rect x="11" y="5" width="10" height="8" rx="5" fill="#D85A30"/><line x1="16" y1="23" x2="16" y2="28" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round"/><line x1="12" y1="28" x2="20" y2="28" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round"/><path d="M14 13 Q16 16 14 19" stroke="#fff" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M18 13 Q16 16 18 19" stroke="#fff" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg>',
            services: [
                'Instant Geyser Tank Cleaning Service',
                'Geyser Tank Cleaning Service 10, 15 & 20 Ltr',
                'Geyser Tank Cleaning Service 25 & Above',
                'Geyser Labour Charge in Breakdown Condition',
                'Geyser Installation',
                'Geyser Re-Installation'
            ]
        },
        Chimney: {
            label: 'Chimney Services',
            img: 'images/project88.png',
            icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="17" width="20" height="13" rx="2.5" fill="#888780"/><path d="M9 17 L11 6 L21 6 L23 17Z" fill="#5F5E5A"/><rect x="11" y="6" width="10" height="3" rx="1" fill="#444441"/><path d="M13 5 Q14.5 2 13 0" stroke="#B4B2A9" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M19 5 Q20.5 2 19 0" stroke="#B4B2A9" stroke-width="1.5" stroke-linecap="round" fill="none"/><rect x="9" y="22" width="14" height="5" rx="1.5" fill="#5F5E5A"/></svg>',
            services: [
                'Chimney Service By Sodium Hydroxide (Basic Clean)',
                'Chimney Service By Sodium Hydroxide (Deep Clean)'
            ]
        }
    };

    /* ── Build popup HTML once ── */
    var popupHTML = ''
        + '<div class="gma-xoverlay" id="gmaXOverlay" role="dialog" aria-modal="true" aria-labelledby="gmaXHeadTitle">'
        + '  <div class="gma-xbox">'
        + '    <div class="gma-xhead">'
        + '      <div class="gma-xhead-left">'
        + '        <div class="gma-xcat-icon" id="gmaXIcon"></div>'
        + '        <div>'
        + '          <div class="gma-xhead-title" id="gmaXHeadTitle"></div>'
        + '          <div class="gma-xhead-sub" id="gmaXHeadSub"></div>'
        + '        </div>'
        + '      </div>'
        + '      <button class="gma-xclose" id="gmaXClose" aria-label="Close">&#x2715;</button>'
        + '    </div>'
        + '    <div class="gma-xbody">'
        + '      <div class="gma-xgrid" id="gmaXGrid"></div>'
        + '    </div>'
        + '    <div class="gma-xfooter">'
        + '      <div class="gma-xfooter-count">Showing <b id="gmaXCount">0</b> services</div>'
        + '      <a href="project-single.html" class="gma-xfooter-link">View All &#8594;</a>'
        + '    </div>'
        + '  </div>'
        + '</div>';

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    var overlay = document.getElementById('gmaXOverlay');
    var grid    = document.getElementById('gmaXGrid');

    /* ── Open ── */
    function gmaXOpen(cat) {
        var d = GMA_DATA[cat];
        if (!d) return;

        document.getElementById('gmaXIcon').innerHTML      = d.icon;
        document.getElementById('gmaXHeadTitle').textContent = d.label;
        document.getElementById('gmaXHeadSub').textContent   = d.services.length + ' services available';
        document.getElementById('gmaXCount').textContent     = d.services.length;

        grid.innerHTML = d.services.map(function (title, i) {
            return '<div class="gma-xcard" style="animation-delay:' + (i * 0.055) + 's">'
                + '<div class="gma-xcard-img">'
                + '<img src="' + d.img + '" alt="' + title + '" loading="lazy"'
                + ' onerror="this.closest(\'.gma-xcard-img\').style.background=\'#f0ece3\';this.style.display=\'none\'">'
                + '</div>'
                + '<div class="gma-xcard-body">'
                + '<p class="gma-xcard-title">' + title + '</p>'
                + '<a href="project-single.html" class="gma-xcard-btn">View Details</a>'
                + '</div>'
                + '</div>';
        }).join('');

        overlay.classList.add('gma-xopen');
        document.body.style.overflow = 'hidden';
    }

    /* ── Close ── */
    function gmaXClose() {
        overlay.classList.remove('gma-xopen');
        document.body.style.overflow = '';
    }

    document.getElementById('gmaXClose').addEventListener('click', gmaXClose);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) gmaXClose();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') gmaXClose();
    });

    /* ── Hook into existing nav tabs ── */
    var nav = document.querySelector('.our-Project-nav');
    if (nav) {
        nav.addEventListener('click', function (e) {
            var link = e.target.closest('a[data-filter]');
            if (!link) return;

            var filter = link.getAttribute('data-filter');
            if (filter === '*') return; /* "All" tab — kuch nahi karo, normal flow */

            e.preventDefault();

            /* Active class update */
            nav.querySelectorAll('a').forEach(function (a) {
                a.classList.remove('active-btn');
            });
            link.classList.add('active-btn');

            /* Category key — strip leading dot */
            var cat = filter.replace('.', '');
            gmaXOpen(cat);
        });
    }

    /* Expose globally agar manually call karna ho */
    window.gmaXOpen  = gmaXOpen;
    window.gmaXClose = gmaXClose;

})();