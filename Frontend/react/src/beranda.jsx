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
                        backgroundColor: '#7FAEF24D',
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
                        backgroundColor: '#FF8B8B4D',
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

            {/* 6. BERITA & PENGUMUMAN SECTION */}
            <div style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1280px',
                    paddingRight: '100px',
                    paddingBottom: '80px',
                    paddingLeft: '100px',
                    boxSizing: 'border-box'
                }}>
                    {/* Inner Content Container */}
                    <div style={{
                        width: '1080px',
                        maxWidth: '1280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '64px'
                    }}>
                        {/* Header Row */}
                        <div style={{
                            width: '1080px',
                            height: '69px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            {/* Title Container */}
                            <div style={{
                                width: '583px',
                                height: '69px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                borderLeft: '8px solid #134F9C',
                                paddingLeft: '29px',
                                boxSizing: 'border-box'
                            }}>
                                <h2 style={{
                                    margin: 0,
                                    width: '530px',
                                    height: '59px',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '49px',
                                    lineHeight: '120%',
                                    color: '#134F9C',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    Berita & Pengumuman
                                </h2>
                            </div>

                            {/* "Lihat Semua Berita" Link */}
                            <a href="#" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                width: '201.33px',
                                height: '24px',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }} className="hover:underline">
                                <span style={{
                                    width: '184px',
                                    height: '24px',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '120%',
                                    textAlign: 'center',
                                    color: '#134F9C',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    Lihat Semua Berita
                                </span>
                                <div style={{ width: '9.33px', height: '9.33px' }}>
                                    <img src="/assets/arrow.png" alt="arrow icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            </a>
                        </div>
                        {/* Berita Cards Container */}
                        <div style={{
                            width: '1080px',
                            height: '702.23px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            {/* Kiri: Berita Utama */}
                            <div style={{
                                width: '678px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px'
                            }}>
                                {/* Image Container */}
                                <div style={{
                                    width: '678px',
                                    height: '442.48px',
                                    borderRadius: '48px',
                                    position: 'relative',
                                    backgroundColor: '#FFFFFF01',
                                    boxShadow: '0px 25px 50px -12px #002B6B1A',
                                    overflow: 'hidden'
                                }}>
                                    {/* Foto Berita (Dummy) */}
                                    <img
                                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                                        alt="Berita Utama"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '677.66px',
                                        height: '100%',
                                        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                                        opacity: 0,
                                        pointerEvents: 'none'
                                    }}></div>

                                    {/* Badge "UTAMA" (Kiri Atas) */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '24px',
                                        left: '24px',
                                        width: '99.56px',
                                        height: '32px',
                                        borderRadius: '9999px',
                                        backgroundColor: '#002B6B',
                                        padding: '8px 24px',
                                        boxSizing: 'border-box',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        {/* Overlay + Shadow Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '9999px',
                                            backgroundColor: '#FFFFFF01',
                                            boxShadow: '0px 8px 10px -6px #0000001A, 0px 20px 25px -5px #0000001A, 0px 0px 0px 2px #FFFFFF33',
                                            pointerEvents: 'none'
                                        }}></div>

                                        <span style={{
                                            width: '51.56px',
                                            height: '16px',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 900,
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                            letterSpacing: '1.2px',
                                            textTransform: 'uppercase',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                            zIndex: 1
                                        }}>
                                            UTAMA
                                        </span>
                                    </div>
                                </div>

                                {/* Text Container */}
                                <div style={{
                                    width: '678px',
                                    height: '228px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px'
                                }}>
                                    {/* Tag & Date Container */}
                                    <div style={{
                                        width: '678px',
                                        height: '28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}>
                                        {/* Tag "Berita Resmi" */}
                                        <div style={{
                                            height: '28px',
                                            borderRadius: '9999px',
                                            backgroundColor: '#002B6B1A',
                                            padding: '6px 16px',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{
                                                height: '16px',
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                fontSize: '13px',
                                                lineHeight: '120%',
                                                color: '#002B6B',
                                                display: 'flex',
                                                alignItems: 'center',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                BERITA RESMI
                                            </span>
                                        </div>

                                        {/* Tanggal */}
                                        <div style={{
                                            height: '16px',
                                            opacity: 0.6,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{
                                                width: '80px',
                                                height: '16px',
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                fontSize: '13px',
                                                lineHeight: '120%',
                                                color: '#404040',
                                                display: 'flex',
                                                alignItems: 'center',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                24 Mei 2024
                                            </span>
                                        </div>
                                    </div>

                                    {/* Judul Berita Utama */}
                                    <div style={{
                                        width: '678px',
                                        height: '111px'
                                    }}>
                                        <h3 style={{
                                            margin: 0,
                                            width: '678px',
                                            height: '111px',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '31px',
                                            lineHeight: '120%',
                                            color: '#000000',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            Kampanye #TauRatingSeruGaming Diluncurkan untuk Tingkatkan Literasi Digital Keluarga
                                        </h3>
                                    </div>

                                    {/* Deskripsi Singkat */}
                                    <div style={{
                                        width: '678px',
                                        height: '57px',
                                        opacity: 0.8
                                    }}>
                                        <p style={{
                                            margin: 0,
                                            width: '678px',
                                            height: '57px',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            lineHeight: '120%',
                                            color: '#404040',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            Kementerian Kominfo bersama para asosiasi gim Indonesia meresmikan kampanye nasional untuk mengedukasi orang tua tentang pentingnya mematuhi rating usia pada gim yang dimainkan anak.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Kanan: List Berita */}
                            <div style={{
                                width: '363px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '40px',
                                paddingBottom: '112.23px',
                                boxSizing: 'border-box'
                            }}>
                                {/* Item Berita 1 */}
                                <div style={{
                                    width: '363px',
                                    height: '96px',
                                    display: 'flex',
                                    alignItems: 'center', // asumsi center vertikal
                                    gap: '24px'
                                }}>
                                    {/* Thumbnail Container */}
                                    <div style={{
                                        width: '128px',
                                        height: '96px',
                                        borderRadius: '24px',
                                        position: 'relative',
                                        backgroundColor: '#FFFFFF01',
                                        boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A',
                                        overflow: 'hidden',
                                        flexShrink: 0
                                    }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
                                            alt="Thumbnail Berita"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    {/* Text Container */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        width: '222px', // Update width sesuai spesifikasi Figma
                                        height: '96px'
                                    }}>
                                        {/* Tag */}
                                        <span style={{
                                            height: '12px',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '10px',
                                            lineHeight: '120%',
                                            color: '#006E1C',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textTransform: 'uppercase'
                                        }}>
                                            PEMBARUAN
                                        </span>

                                        {/* Judul Berita Kecil */}
                                        <h4 style={{ margin: 0, paddingTop: '2.5px', width: '222px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', color: '#1A1B20' }}>Database IGRS Kini Mencakup Lebih dari 15.000</h4>

                                        {/* Tanggal */}
                                        <div style={{
                                            width: '222px',
                                            height: '12px',
                                            opacity: 0.6,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{
                                                width: '59px',
                                                height: '12px',
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 500,
                                                fontSize: '10px',
                                                lineHeight: '120%',
                                                color: '#404040',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                18 Mei 2024
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item Berita 2 */}
                                <div style={{
                                    width: '363px',
                                    height: '96px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '24px'
                                }}>
                                    <div style={{ width: '128px', height: '96px', borderRadius: '24px', position: 'relative', backgroundColor: '#FFFFFF01', boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80" alt="Thumbnail Berita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', width: '222px', height: '96px' }}>
                                        <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '120%', color: '#002B6B', display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>TIPS & TRIK</span>
                                        <h4 style={{ margin: 0, paddingTop: '2.5px', width: '222px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', color: '#1A1B20' }}>Cara Memilih Gim yang Tepat untuk Tumbuh Kembang Anak</h4>
                                        <div style={{ width: '222px', height: '12px', opacity: 0.6, display: 'flex', alignItems: 'center' }}>
                                            <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#404040', display: 'flex', alignItems: 'center' }}>15 Mei 2024</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item Berita 3 */}
                                <div style={{
                                    width: '363px',
                                    height: '96px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '24px'
                                }}>
                                    <div style={{ width: '128px', height: '96px', borderRadius: '24px', position: 'relative', backgroundColor: '#FFFFFF01', boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=400&q=80" alt="Thumbnail Berita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', width: '222px', height: '96px' }}>
                                        <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '120%', color: '#E85D04', display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>PENGUMUMAN</span>
                                        <h4 style={{ margin: 0, paddingTop: '2.5px', width: '222px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', color: '#1A1B20' }}>Pendaftaran Klasifikasi Gim Gelombang Kedua Resmi Dibuka</h4>
                                        <div style={{ width: '222px', height: '12px', opacity: 0.6, display: 'flex', alignItems: 'center' }}>
                                            <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#404040', display: 'flex', alignItems: 'center' }}>12 Mei 2024</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item Berita 4 */}
                                <div style={{
                                    width: '363px',
                                    height: '96px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '24px'
                                }}>
                                    <div style={{ width: '128px', height: '96px', borderRadius: '24px', position: 'relative', backgroundColor: '#FFFFFF01', boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" alt="Thumbnail Berita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', width: '222px', height: '96px' }}>
                                        <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '120%', color: '#006E1C', display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>PEMBARUAN</span>
                                        <h4 style={{ margin: 0, paddingTop: '2.5px', width: '222px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', color: '#1A1B20' }}>Integrasi Data IGRS dengan Platform Distribusi Global</h4>
                                        <div style={{ width: '222px', height: '12px', opacity: 0.6, display: 'flex', alignItems: 'center' }}>
                                            <span style={{ height: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '10px', lineHeight: '120%', color: '#404040', display: 'flex', alignItems: 'center' }}>05 Mei 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                width: '100%',
                backgroundColor: '#1A428A',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    width: '1280px',
                    height: '459px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box'
                }}>
                    {/* Inner Container Footer */}
                    <div style={{
                        width: '1274px',
                        height: '459px',
                        backgroundColor: '#1B4685',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto',
                        boxSizing: 'border-box'
                    }}>
                        {/* Container Konten Footer */}
                        <div style={{
                            width: '1019px', // Dibulatkan dari 1019.19px
                            height: '436px', // Dibulatkan dari 436.06px
                            paddingTop: '80px',
                            gap: '10px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box'
                        }}>
                            {/* Baris 5 Kolom akan di sini */}
                            <div style={{
                                width: '1019px',
                                height: '214px',
                                display: 'flex',
                                gap: '50px',
                                boxSizing: 'border-box'
                            }}>
                                {/* Kolom 1: Logo & Teks */}
                                <div style={{
                                    width: '255px',
                                    height: '208px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    boxSizing: 'border-box'
                                }}>
                                    {/* Wadah 2 Logo */}
                                    <div style={{
                                        width: '255px', // Dibulatkan dari 254.79
                                        height: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        {/* Logo Komdigi */}
                                        <div style={{
                                            width: '67px',
                                            height: '40px',
                                            paddingRight: '10.67px',
                                            borderRight: '0.67px solid #FFFFFF',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <img src="/assets/icons/LogoKomdigi.png" alt="Logo Komdigi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>

                                        {/* Logo IGRS */}
                                        <div style={{
                                            width: '138.45px',
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <img src="/assets/icons/LogoIgrsTeksPutih.png" alt="Logo IGRS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>

                                    {/* Teks IGRS */}
                                    <div style={{
                                        width: '255px',
                                        height: '148px',
                                        paddingTop: '20px',
                                        paddingBottom: '14px',
                                        boxSizing: 'border-box'
                                    }}>
                                        <p style={{
                                            margin: 0,
                                            width: '255px',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            lineHeight: '120%',
                                            color: '#FFFFFF'
                                        }}>
                                            Indonesia Game Rating System (IGRS) merupakan pengklasifikasian Permainan Interaktif Elektronik (PIE) atau game berdasarkan konten dan kelompok usia pengguna.
                                        </p>
                                    </div>
                                </div>

                                {/* Container Kolom-Kolom Navigasi */}
                                <div style={{
                                    width: '714px', // Dibulatkan dari 714.4
                                    height: '214px', // Dibulatkan dari 214.39
                                    display: 'flex',
                                    gap: '10px',
                                    boxSizing: 'border-box'
                                }}>
                                    {/* Kolom Pintasan */}
                                    <div style={{ width: '171px', height: '214px', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '120%',
                                            color: '#FFFFFF'
                                        }}>
                                            Pintasan
                                        </h3>

                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Beranda
                                        </a>

                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Blog
                                        </a>
                                    </div>

                                    {/* Kolom Informasi */}
                                    <div style={{ width: '171px', height: '214px', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '120%',
                                            color: '#FFFFFF'
                                        }}>
                                            Informasi
                                        </h3>
                                        
                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Tentang IGRS
                                        </a>

                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Maklumat Pelayanan
                                        </a>

                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Informasi Rating
                                        </a>

                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            FAQ
                                        </a>
                                    </div>

                                    {/* Kolom Kontak */}
                                    <div style={{ width: '171px', height: '214px', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '120%',
                                            color: '#FFFFFF'
                                        }}>
                                            Kontak
                                        </h3>
                                        
                                        <a href="#" style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '22px',
                                            letterSpacing: '0.32px',
                                            color: '#D7ECFA',
                                            textDecoration: 'none'
                                        }}>
                                            Hubungi Kami
                                        </a>
                                    </div>

                                    {/* Kolom Alamat Kami */}
                                    <div style={{ width: '171px', height: '187px', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '120%',
                                            color: '#FFFFFF'
                                        }}>
                                            Alamat Kami
                                        </h3>
                                        
                                        <p style={{
                                            margin: 0,
                                            width: '172px',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            lineHeight: '120%',
                                            color: '#D7ECFA'
                                        }}>
                                            Jl. Medan Merdeka Barat No.9, RT.002/RW.003, Gambir, Jakarta Pusat, DKI Jakarta 10110
                                        </p>

                                        {/* Telepon */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '140px',
                                            height: '19px'
                                        }}>
                                            <div style={{
                                                width: '26px',
                                                height: '25.33px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start'
                                            }}>
                                                <img src="/assets/icons/IconTelepon.png" alt="Telepon" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{
                                                width: '114px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 500,
                                                fontSize: '16px',
                                                lineHeight: '120%',
                                                color: '#D7ECFA'
                                            }}>
                                                +62811806860
                                            </span>
                                        </div>

                                        {/* Email */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '165px',
                                            height: '19px'
                                        }}>
                                            <div style={{
                                                width: '26px',
                                                height: '25.33px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start'
                                            }}>
                                                <img src="/assets/icons/IconEmail.png" alt="Email" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{
                                                width: '139px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 500,
                                                fontSize: '16px',
                                                lineHeight: '120%',
                                                color: '#D7ECFA'
                                            }}>
                                                helpdesk@igrs.id
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bagian Bawah Footer: Syarat & Ketentuan, dll */}
                            <div style={{
                                width: '1019px',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxSizing: 'border-box'
                            }}>
                                <a href="#" style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '25.14px',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    textAlign: 'center'
                                }}>
                                    Syarat dan Ketentuan
                                </a>

                                {/* Garis Pemisah (Divider) */}
                                <div style={{
                                    height: '19px',
                                    borderRight: '1px solid #FFFFFF', // Dibulatkan dari 0.67px
                                    margin: '0 20px'
                                }}></div>

                                <a href="#" style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '25.14px',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    textAlign: 'center'
                                }}>
                                    Kebijakan Privasi
                                </a>
                            </div>
                            
                            {/* Garis Horizontal Bawah */}
                            <div style={{
                                width: '713px', // Dibulatkan dari 713.43
                                height: '11px',
                                paddingTop: '10px',
                                alignSelf: 'center',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '1px',
                                    opacity: 0.3,
                                    backgroundColor: '#666666'
                                }}></div>
                            </div>
                            
                            {/* Bagian Copyright */}
                            <div style={{
                                width: '1019px',
                                height: '50px',
                                paddingBottom: '20px',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '30px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <p style={{
                                        margin: 0,
                                        width: '705px',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        lineHeight: '120%',
                                        color: '#FFFFFF',
                                        textAlign: 'center'
                                    }}>
                                        © IGRS 2026 - Direktorat Jenderal Ekosistem Digital | Kementerian Komunikasi dan Digital RI
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