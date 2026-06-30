import React from 'react';


const Beranda = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-hidden">
            {/* Background Blur Elements (Berdasarkan Figma) */}
            <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none overflow-hidden">
                {/* Radial Gradient Atas (Halus, menyebar luas dari atas) */}
                <div
                    className="absolute top-0 left-0 w-full h-[600px]"
                    style={{
                        opacity: 0.14,
                        background: 'radial-gradient(ellipse 120% 100% at 50% -10%, #1d6febff 0%, rgba(0, 43, 107, 0) 100%)',
                    }}
                ></div>

                {/* Lingkaran Biru */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: '384px',
                        height: '384px',
                        backgroundColor: '#7faef2ff',
                        opacity: 0.35,
                        filter: 'blur(64px)',
                        top: '8%',
                        left: '-11%',
                    }}
                ></div>

                {/* Lingkaran Hijau */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: '384px',
                        height: '384px',
                        backgroundColor: '#85D98F4D',
                        opacity: 1,
                        filter: 'blur(64px)',
                        top: '28%',
                        right: '-10%',
                    }}
                ></div>

                {/* Lingkaran Pink/Merah di tengah */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: '384px',
                        height: '384px',
                        backgroundColor: '#ff8b8b',
                        opacity: 0.40,
                        filter: 'blur(64px)',
                        top: '70%',
                        left: '35%',
                    }}
                ></div>
            </div>

            {/* 1. NAVBAR */}
            <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <img src="/assets/icons/logo-igrs.png" alt="IGRS Logo" className="h-10" />

                        {/* Nav Links */}
                        <ul
                            className="hidden md:flex gap-6 text-gray-700"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '120%', letterSpacing: '0', fontWeight: '700' }}
                        >
                            <li className="text-[#1A4582] border-b-2 border-[#1A4582] pb-1 cursor-pointer" style={{ fontWeight: '700' }}>Beranda</li>
                            <li className="hover:text-[#1A4582] cursor-pointer transition" style={{ fontWeight: '700', color: '#000000' }}>game apps</li>
                            <li className="hover:text-[#1A4582] cursor-pointer transition" style={{ fontWeight: '700', color: '#000000' }}>informasi rating</li>
                            <li className="hover:text-[#1A4582] cursor-pointer transition" style={{ fontWeight: '700', color: '#000000' }}>Tentang</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Login Button */}
                        <button
                            className="bg-[#134F9C] text-white rounded-[12px] flex items-center justify-center hover:bg-[#0e3b75] transition font-semibold text-[14px] tracking-[0.7px] whitespace-nowrap"
                            style={{
                                width: '101px',
                                height: '35px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                                paddingLeft: '24px',
                                paddingRight: '24px',
                                fontFamily: 'Inter, sans-serif',
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none'
                            }}
                        >
                            masuk
                        </button>
                    </div>
                </div>
            </nav>

            {/* 2. HERO SECTION */}
            <section className="relative container mx-auto px-6 pt-[55px] pb-[72.55px] text-center max-w-4xl z-10">
                {/* Tag */}
                <div
                    className="inline-flex items-center gap-3 bg-[#DCE4F3] text-[#002B6B] text-[20px] font-bold leading-[1.2] px-5 py-2 rounded-full mb-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <div className="w-3 h-3 rounded-full bg-[#002B6B]"></div>
                    RESMI KOMINFO
                </div>

                {/* Main Heading */}
                <h1 className="text-[40px] md:text-[61px] font-bold leading-[1.2] mb-10 text-[#002B6B] text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Main Lebih Aman <br /> dengan <span className="text-[#64C971]">Rating</span> yang <br /> Tepat
                </h1>

                {/* Search Bar & Filter */}
                <div className="flex justify-center items-center mb-10 w-full max-w-2xl mx-auto gap-4">
                    <div className="relative flex-grow bg-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-gray-100 flex items-center h-[56px]">
                        <svg className="w-5 h-5 absolute left-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input
                            type="text"
                            placeholder="Masukkan Pencarian..."
                            className="w-full bg-transparent px-4 py-3 pl-12 focus:outline-none text-gray-700 font-medium h-full rounded-full"
                        />
                    </div>
                    <button className="bg-white h-[56px] w-[56px] rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition shrink-0">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </button>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-5">
                    <button className="bg-[#174F9B] text-white px-10 py-4 rounded-[12px] font-bold text-[15px] shadow-[0_12px_24px_-8px_rgba(23,79,155,0.6)] hover:bg-[#113e7c] transition">
                        Cari Game
                    </button>
                    <button className="bg-[#00701F] text-white px-10 py-4 rounded-[12px] font-bold text-[15px] shadow-[0_12px_24px_-8px_rgba(0,112,31,0.6)] hover:bg-[#005a18] transition">
                        Pelajari Rating
                    </button>
                </div>
            </section>

            {/* 3. DASHBOARD RATING GIM */}
            <div className="w-full bg-white relative z-20" style={{ paddingTop: '85px', paddingBottom: '35px' }}>
                {/* Centered wrapper max-width 1280px */}
                <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '100px', paddingRight: '100px' }}>
                    {/* Inner section: 1080px wide, gap 48px antara header dan cards */}
                    <section style={{ width: '1080px', display: 'flex', flexDirection: 'column', gap: '48px' }}>

                        {/* Container 1: Header row */}
                        <div className="flex flex-row justify-between items-end w-full">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="w-[4px] h-[49px] bg-[#006E1C]"></div>
                                    <h2 className="text-[49px] font-bold text-[#1a1a1a] leading-none tracking-[0.5px]" style={{ fontFamily: 'Inter, sans-serif' }}>Dashboard Rating Gim</h2>
                                </div>
                                <p className="text-[16px] text-gray-600 font-medium mt-3 leading-[1.2] tracking-[-0.3px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Klasifikasi usia berdasarkan standar konten IGRS</p>
                            </div>
                            <a href="#" className="text-[#002B6B] font-bold text-[20px] leading-[1.2] hover:underline flex items-center gap-2 pb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Lihat Standar Lengkap
                                <div style={{ width: '9.33px', height: '9.33px' }}>
                                    <img src="/assets/arrow.png" alt="arrow icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            </a>
                        </div>

                        {/* Container 2: Rating Cards */}
                        <div style={{ width: '1080px', height: '285px', gap: '15px', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                            {/* 3+ */}
                            <div className="w-[204px] h-[285px] bg-[#EEF8F1] rounded-[40px] border border-[#BDE4C6] p-8 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition shrink-0">
                                <img src="/assets/icons/3tahunkeatas.png" alt="3+" className="h-[75px] object-contain drop-shadow-sm" />
                                <div className="text-center mt-2">
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#1E8235' }}>3,794</p>
                                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#555555' }}>jumlah pemain</p>
                                </div>
                                <button style={{ width: '138px', height: '45px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px', border: '1px solid #006E1C', backgroundColor: '#85D98F', color: '#FAF8FF', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', cursor: 'pointer' }} className="hover:brightness-95 transition">
                                    Lihat kriteria
                                </button>
                            </div>

                            {/* 7+ */}
                            <div className="w-[204px] h-[285px] bg-[#EEF8F1] rounded-[40px] border border-[#BDE4C6] p-8 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition shrink-0">
                                <img src="/assets/icons/7tahunkeatas.png" alt="7+" className="h-[75px] object-contain drop-shadow-sm" />
                                <div className="text-center mt-2">
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#1E8235' }}>5,224</p>
                                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#555555' }}>jumlah pemain</p>
                                </div>
                                <button style={{ width: '138px', height: '45px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px', border: '1px solid #006E1C', backgroundColor: '#85D98F', color: '#FAF8FF', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', cursor: 'pointer' }} className="hover:brightness-95 transition">
                                    Lihat kriteria
                                </button>
                            </div>

                            {/* 13+ */}
                            <div className="w-[204px] h-[285px] bg-[#EAF2FE] rounded-[40px] border border-[#A6C8FF] p-8 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition shrink-0">
                                <img src="/assets/icons/13tahunkeatas.png" alt="13+" className="h-[75px] object-contain drop-shadow-sm" />
                                <div className="text-center mt-2">
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#165BC5' }}>2,591</p>
                                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#555555' }}>jumlah pemain</p>
                                </div>
                                <button style={{ width: '138px', height: '45px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px', border: '1px solid #134F9C', backgroundColor: '#7FAEF2', color: '#FAF8FF', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', cursor: 'pointer' }} className="hover:brightness-95 transition">
                                    Lihat kriteria
                                </button>
                            </div>

                            {/* 15+ */}
                            <div className="w-[204px] h-[285px] bg-[#EAF2FE] rounded-[40px] border border-[#A6C8FF] p-8 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition shrink-0">
                                <img src="/assets/icons/15tahunkeatas.png" alt="15+" className="h-[75px] object-contain drop-shadow-sm" />
                                <div className="text-center mt-2">
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#165BC5' }}>3,118</p>
                                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#555555' }}>jumlah pemain</p>
                                </div>
                                <button style={{ width: '138px', height: '45px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px', border: '1px solid #134F9C', backgroundColor: '#7FAEF2', color: '#FAF8FF', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', cursor: 'pointer' }} className="hover:brightness-95 transition">
                                    Lihat kriteria
                                </button>
                            </div>

                            {/* 18+ */}
                            <div className="w-[204px] h-[285px] bg-[#FCEAE8] rounded-[40px] border border-[#F6B8B8] p-8 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition shrink-0">
                                <img src="/assets/icons/18tahunkeatas.png" alt="18+" className="h-[75px] object-contain drop-shadow-sm" />
                                <div className="text-center mt-2">
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#D12B2B' }}>298</p>
                                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', color: '#555555' }}>jumlah pemain</p>
                                </div>
                                <button style={{ width: '138px', height: '45px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px', border: '1px solid #ED261C', backgroundColor: '#FF8B8B', color: '#FAF8FF', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', textAlign: 'center', cursor: 'pointer' }} className="hover:brightness-95 transition">
                                    Lihat kriteria
                                </button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

            {/* 4. TELUSURI GIM SECTION - outer wrapper background putih agar seamless dengan dashboard */}
            <div style={{ width: '100%', backgroundColor: 'white' }}>

                {/* Vector - Wave: gambar ombak langsung dari Figma, seamless transisi putih→biru */}
                {/* Wrapper bg #A9CBFB: gap di bawah image tampil biru, bukan putih */}
                <div style={{ width: '100%', lineHeight: 0, backgroundColor: '#A9CBFB' }}>
                    <img
                        src="/assets/ombak2.png"
                        alt="wave divider"
                        style={{ width: '100%', height: '123.5px', objectFit: 'fill', display: 'block' }}
                    />
                </div>

                {/* Browse Games Section - Outer container: 1280 x 740.19px */}
                <div style={{
                    width: '100%',
                    backgroundColor: '#A9CBFB',
                    paddingTop: '22px',
                    paddingRight: '100px',
                    paddingBottom: '80px',
                    paddingLeft: '100px',
                }}>
                    {/* Inner content container: 1080 x 638.19px, flex column, gap 48px */}
                    <div style={{
                        width: '1080px',
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '48px',
                        margin: '0 auto',
                    }}>
                        {/* Header container: title + filter buttons — 1080 x 133px, gap 24px */}
                        <div style={{
                            width: '100%',
                            height: '133px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            alignItems: 'center',
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
                                <h2 style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '49px',
                                    lineHeight: '120%',
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    margin: 0,
                                    width: '302px',
                                    height: '59px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    Telusuri Gim
                                </h2>
                                {/* Garis kecil di bawah teks */}
                                <div style={{
                                    width: '110px',
                                    height: '4px',
                                    backgroundColor: '#7FAEF2',
                                    borderRadius: '9999px'
                                }}></div>
                            </div>

                            {/* Filter Buttons Container: 1080 x 46px */}
                            <div style={{
                                width: '1080px',
                                height: '46px',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Active Button */}
                                <button style={{
                                    width: '102px',
                                    height: '46px',
                                    padding: '11px 24px',
                                    borderRadius: '9999px',
                                    backgroundColor: '#134F9C',
                                    color: '#FAF8FF', // Teks warna putih agar terbaca di bg biru
                                    border: 'none',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    boxSizing: 'border-box'
                                }}>
                                    Semua
                                </button>

                                {/* Inactive Buttons */}
                                {['3+', '7+', '13+', '15+', '18+'].map((age) => (
                                    <button key={age} style={{
                                        width: '72px',
                                        height: '41px',
                                        padding: '10px 24px',
                                        borderRadius: '9999px',
                                        backgroundColor: '#FFFFFF', // Asumsi warna background putih
                                        border: '1px solid #C4C6D2',
                                        color: '#404040', // Warna teks umur sesuai spec
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        lineHeight: '120%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        boxSizing: 'border-box'
                                    }}>
                                        {age}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cards container: 1080 x 331.19px, flex row, gap 24px */}
                        <div style={{
                            width: '100%',
                            height: '331.19px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '24px',
                        }}>
                            {/* Game 1 (3+) */}
                            <div className="relative overflow-hidden group cursor-pointer bg-black" style={{ width: '220.8px', height: '331.19px', borderRadius: '24px', flexShrink: 0 }}>
                                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Legend of..." className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 right-4" style={{
                                    width: '42px', height: '24px', padding: '4px 12px', borderRadius: '12px',
                                    backgroundColor: '#85D98F', color: '#006E1C',
                                    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '120%',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
                                    boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A, 0px 0px 0px 2px #FFFFFF33'
                                }}>3+</div>
                                <div className="absolute bottom-6 left-6" style={{ width: '172.8px', height: '36px', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: 0, padding: 0, width: '172.8px', height: '24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>Legend of...</h3>
                                    <p style={{ margin: 0, padding: 0, width: '172.8px', height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>ADVENTURE • ACTION</p>
                                </div>
                            </div>

                            {/* Game 2 (7+) */}
                            <div className="relative overflow-hidden group cursor-pointer bg-black" style={{ width: '220.8px', height: '331.19px', borderRadius: '24px', flexShrink: 0 }}>
                                <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pixel World..." className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 right-4" style={{
                                    width: '42px', height: '24px', padding: '4px 12px', borderRadius: '12px',
                                    backgroundColor: '#85D98F', color: '#006E1C',
                                    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '120%',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
                                    boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A, 0px 0px 0px 2px #FFFFFF33'
                                }}>7+</div>
                                <div className="absolute bottom-6 left-6" style={{ width: '172.8px', height: '36px', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: 0, padding: 0, width: '172.8px', height: '24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>Pixel World...</h3>
                                    <p style={{ margin: 0, padding: 0, width: '172.8px', height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>SANDBOX • CREATIVE</p>
                                </div>
                            </div>

                            {/* Game 3 (13+) */}
                            <div className="relative overflow-hidden group cursor-pointer bg-black" style={{ width: '220.8px', height: '331.19px', borderRadius: '24px', flexShrink: 0 }}>
                                <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sector 7 Strike" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 right-4" style={{
                                    width: '42px', height: '24px', padding: '4px 12px', borderRadius: '12px',
                                    backgroundColor: '#7FAEF2', color: '#134F9C',
                                    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '120%',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
                                    boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A, 0px 0px 0px 2px #FFFFFF33'
                                }}>13+</div>
                                <div className="absolute bottom-6 left-6" style={{ width: '172.8px', height: '36px', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: 0, padding: 0, width: '172.8px', height: '24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>Sector 7 Strike</h3>
                                    <p style={{ margin: 0, padding: 0, width: '172.8px', height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>SHOOTER • TACTICAL</p>
                                </div>
                            </div>

                            {/* Game 4 (15+) */}
                            <div className="relative overflow-hidden group cursor-pointer bg-black" style={{ width: '220.8px', height: '331.19px', borderRadius: '24px', flexShrink: 0 }}>
                                <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Highway Heat" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 right-4" style={{
                                    width: '42px', height: '24px', padding: '4px 12px', borderRadius: '12px',
                                    backgroundColor: '#FF8B8B', color: '#ED261C',
                                    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '120%',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
                                    boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A, 0px 0px 0px 2px #FFFFFF33'
                                }}>15+</div>
                                <div className="absolute bottom-6 left-6" style={{ width: '172.8px', height: '36px', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: 0, padding: 0, width: '172.8px', height: '24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>Highway Heat</h3>
                                    <p style={{ margin: 0, padding: 0, width: '172.8px', height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#FAF8FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>RACING • SPORTS</p>
                                </div>
                            </div>
                        </div>

                        {/* Button container: 1080 x 78px, padding-top 16px, center */}
                        <div style={{
                            width: '100%',
                            height: '78px',
                            paddingTop: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}>
                            <button style={{
                                position: 'relative',
                                width: '410px',
                                height: '62px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '32px',
                                border: '2px solid #002B6B33',
                                color: '#134F9C',
                                fontFamily: 'Inter, sans-serif',
                                cursor: 'pointer',
                                transition: '0.3s',
                                boxSizing: 'border-box'
                            }}
                                className="hover:bg-gray-50 hover:shadow-md"
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '17.89px',
                                    left: '57px',
                                    width: '267px',
                                    height: '24px',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '120%',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    Lihat Ribuan Game Lainnya
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '23.52px',
                                    left: '354.32px',
                                    width: '16px',
                                    height: '16px'
                                }}>
                                    <img src="/assets/arrow.png" alt="arrow icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* 5. KATEGORI KONTEN SECTION */}
            <div style={{
                width: '100%',
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1280px',
                    height: '892.5px',
                    paddingTop: '79px',
                    paddingRight: '100px',
                    paddingBottom: '80px',
                    paddingLeft: '100px',
                    boxSizing: 'border-box'
                }}>
                    {/* Inner Content Container */}
                    <div style={{
                        width: '1080px',
                        height: '733.5px',
                        maxWidth: '1280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}>
                        {/* Header Judul */}
                        <div style={{
                            width: '1080px',
                            height: '113px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            {/* Heading */}
                            <div style={{ width: '1080px', height: '59px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h2 style={{
                                    margin: 0,
                                    width: '387px',
                                    height: '59px',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '49px',
                                    lineHeight: '120%',
                                    color: '#000000',
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Kategori Konten
                                </h2>
                            </div>

                            {/* Subheading */}
                            <div style={{ width: '672px', height: '38px', maxWidth: '672px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p style={{
                                    margin: 0,
                                    width: '675px',
                                    height: '38px',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '120%',
                                    color: '#404040',
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    Kami mengevaluasi berbagai aspek konten untuk memastikan kesesuaian dengan kelompok usia target.
                                </p>
                            </div>
                        </div>

                        {/* Card Grid Container */}
                        <div style={{
                            width: '1080px',
                            height: '604.5px',
                            marginTop: '16px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            rowGap: '32px',
                            columnGap: '32px'
                        }}>
                            {/* Card 1: Kekerasan */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #BA1A1A1A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #BA1A1A0D, 0px 10px 1px -5px #BA1A1A'
                            }}>
                                {/* Icon Overlay Container */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#FF8B8B4D',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 0px 0px 4px #BA1A1A0D'
                                }}>
                                    <img src="/assets/icons/IconKekerasan.png" alt="Kekerasan" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                                </div>

                                {/* Heading */}
                                <div style={{ width: '180px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{
                                        margin: 0,
                                        width: '180px',
                                        height: '48px',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        lineHeight: '120%',
                                        color: '#000000',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        Kekerasan <br /> (Violence)
                                    </h3>
                                </div>

                                {/* Description */}
                                <div style={{ width: '180px', height: '64px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{
                                        margin: 0,
                                        width: '180px',
                                        height: '64px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 300,
                                        fontSize: '13px',
                                        lineHeight: '120%',
                                        color: '#404040',
                                        textAlign: 'left'
                                    }}>
                                        Penggambaran aksi kekerasan fisik, penggunaan senjata, dan dampak visualnya.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Ketakutan */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #002B6B1A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #002B6B0D, 0px 10px 1px -5px #002B6B'
                            }}>
                                {/* Icon Overlay Container */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#7FAEF24D',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 0px 0px 4px #002B6B0D'
                                }}>
                                    <img src="/assets/icons/IconKetakutan.png" alt="Ketakutan" style={{ width: '62px', height: '62px', objectFit: 'contain' }} />
                                </div>

                                {/* Heading */}
                                <div style={{ width: '180px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{
                                        margin: 0,
                                        width: '180px',
                                        height: '48px',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        lineHeight: '120%',
                                        color: '#000000',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        Ketakutan <br /> (Fear)
                                    </h3>
                                </div>

                                {/* Description */}
                                <div style={{ width: '180px', height: '64px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{
                                        margin: 0,
                                        width: '180px',
                                        height: '64px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 300,
                                        fontSize: '13px',
                                        lineHeight: '120%',
                                        color: '#404040',
                                        textAlign: 'left'
                                    }}>
                                        Elemen horor, kejutan, atau suasana yang dapat memicu rasa takut berlebih.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Interaksi Online */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #0056D21A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #60A5FA0D, 0px 10px 1px -5px #60A5FA'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#85D98F4D',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Inner Overlay + Shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '24px',
                                        backgroundColor: '#7FAEF24D',
                                        boxShadow: '0px 0px 0px 4px #EFF6FF',
                                        pointerEvents: 'none'
                                    }}></div>
                                    <img src="/assets/icons/IconInteraksi.png" alt="Interaksi Online" style={{ width: '50px', height: '50px', objectFit: 'contain', zIndex: 1 }} />
                                </div>
                                <div style={{ width: '180px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, width: '180px', height: '48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#000000', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Interaksi <br /> Online
                                    </h3>
                                </div>
                                <div style={{ width: '180px', height: '48px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{ margin: 0, width: '180px', height: '64px', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: '120%', color: '#404040', textAlign: 'left' }}>
                                        Fitur chat, komunitas, dan interaksi antar pemain secara real-time.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: Simulasi Perjudian */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #16A34A1A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #006E1C0D, 0px 10px 1px -5px #006E1C'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#006E1C1A',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Inner Overlay + Shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '24px',
                                        backgroundColor: '#85D98F4D',
                                        boxShadow: '0px 0px 0px 4px #006E1C0D',
                                        pointerEvents: 'none'
                                    }}></div>
                                    <img src="/assets/icons/IconPerjudian.png" alt="Simulasi Perjudian" style={{ width: '63.651573181152344px', height: '63.902652740478516px', objectFit: 'contain', zIndex: 1 }} />
                                </div>
                                <div style={{ width: '180px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, width: '180px', height: '48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#000000', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Simulasi <br /> Perjudian
                                    </h3>
                                </div>
                                <div style={{ width: '180px', height: '48px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{ margin: 0, width: '180px', height: '64px', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: '120%', color: '#404040', textAlign: 'left' }}>
                                        Fitur yang menyerupai mekanisme judi atau taruhan dalam permainan.
                                    </p>
                                </div>
                            </div>

                            {/* Card 5: Obat-obatan */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #22C55E1A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #4ADE800D, 0px 10px 1px -5px #4ADE80'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#DCFCE7',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Inner Overlay + Shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '24px',
                                        backgroundColor: '#BED9854D',
                                        boxShadow: '0px 0px 0px 4px #F0FDF4',
                                        pointerEvents: 'none'
                                    }}></div>
                                    <img src="/assets/icons/IconObatObatan.png" alt="Obat-obatan" style={{ width: '54.89283752441406px', height: '60.719573974609375px', objectFit: 'contain', zIndex: 1 }} />
                                </div>
                                <div style={{ width: '180px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, width: '180px', height: '48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#000000', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Obat-obatan
                                    </h3>
                                </div>
                                <div style={{ width: '180px', height: '64px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{ margin: 0, width: '180px', height: '64px', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: '120%', color: '#404040', textAlign: 'left' }}>
                                        Referensi atau penggunaan zat terlarang dalam narasi atau mekanik gim.
                                    </p>
                                </div>
                            </div>

                            {/* Card 6: Konten Seksual */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #EF44441A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #BA1A1A0D, 0px 10px 1px -5px #BA1A1A'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#FF8B8B4D',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Inner Overlay + Shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '24px',
                                        backgroundColor: '#FFFFFF01',
                                        boxShadow: '0px 0px 0px 4px #BA1A1A0D',
                                        pointerEvents: 'none'
                                    }}></div>
                                    <img src="/assets/icons/IconKontenSeksual.png" alt="Konten Seksual" style={{ width: '40px', height: '43px', objectFit: 'contain', zIndex: 1 }} />
                                </div>
                                <div style={{ width: '180px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, width: '180px', height: '48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#000000', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Konten Seksual
                                    </h3>
                                </div>
                                <div style={{ width: '180px', height: '48px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{ margin: 0, width: '180px', height: '64px', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: '120%', color: '#404040', textAlign: 'left' }}>
                                        Visual, dialog, atau tema yang berkaitan dengan konten dewasa.
                                    </p>
                                </div>
                            </div>

                            {/* Card 7: Bahasa Kasar */}
                            <div style={{
                                position: 'relative',
                                width: '246px',
                                height: '277.25px',
                                borderRadius: '40px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #9CA3AF1A',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10.8px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 8px 10px -6px #CBD5E10D, 0px 10px 1px -5px #CBD5E1'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    backgroundColor: '#F1F5F9',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Inner Overlay + Shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '24px',
                                        backgroundColor: '#FFFFFF01',
                                        boxShadow: '0px 0px 0px 4px #F8FAFC',
                                        pointerEvents: 'none'
                                    }}></div>
                                    <img src="/assets/icons/IconBahasaKasar.png" alt="Bahasa Kasar" style={{ width: '30px', height: '25.5px', objectFit: 'contain', zIndex: 1 }} />
                                </div>
                                <div style={{ width: '180px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, width: '180px', height: '48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', color: '#000000', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Bahasa Kasar
                                    </h3>
                                </div>
                                <div style={{ width: '180px', height: '64px', display: 'flex', alignItems: 'flex-start' }}>
                                    <p style={{ margin: 0, width: '180px', height: '64px', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: '120%', color: '#404040', textAlign: 'left' }}>
                                        Penggunaan kata-kata yang tidak pantas, umpatan, atau bahasa vulgar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Beranda;