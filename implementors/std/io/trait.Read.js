(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a> for <a class=\"struct\" href=\"bincode/read_types/struct.SliceReader.html\" title=\"struct bincode::read_types::SliceReader\">SliceReader</a>&lt;'storage&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a> for <a class=\"struct\" href=\"bincode/read_types/struct.IoReadReader.html\" title=\"struct bincode::read_types::IoReadReader\">IoReadReader</a>&lt;R&gt;",];
implementors["lz4"] = ["impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"lz4/struct.Decoder.html\" title=\"struct lz4::Decoder\">Decoder</a>&lt;R&gt;",];
implementors["tempfile"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
