exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("candinfo")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("candinfo").insert([
        {
        id: 1,
        bio: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
        portfolio: "howstuffworks.com",
        resume: "deviantart.com",
        linedin: "so-net.ne.jp",
        otherlinks: "nasa.gov",
        location: "Japerejo, CA",
        relocate: true,
        candidateId: 1
        },
        {
        id: 2,
        bio: "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        portfolio: "whitehouse.gov",
        resume: "ox.ac.uk",
        linedin: "vistaprint.com",
        otherlinks: "answers.com",
        location: "Krajan Kinanti, CA",
        relocate: true,
        candidateId: 2
        },
        {
        id: 3,
        bio: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        portfolio: "wikipedia.org",
        resume: "google.ru",
        linedin: "reference.com",
        otherlinks: "ted.com",
        location: "Shinjō, CA",
        relocate: true,
        candidateId: 3
        },
        {
        id: 4,
        bio: "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        portfolio: "amazon.de",
        resume: "accuweather.com",
        linedin: "who.int",
        otherlinks: "mysql.com",
        location: "Arles, CA",
        relocate: true,
        candidateId: 4
        },
        {
        id: 5,
        bio: "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        portfolio: "cafepress.com",
        resume: "skyrock.com",
        linedin: "jiathis.com",
        otherlinks: "xrea.com",
        location: "Cileunyi, CA",
        relocate: true,
        candidateId: 5
        },
        {
        id: 6,
        bio: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        portfolio: "tuttocitta.it",
        resume: "oracle.com",
        linedin: "sohu.com",
        otherlinks: "europa.eu",
        location: "Pereira Barreto, CA",
        relocate: true,
        candidateId: 6
        },
        {
        id: 7,
        bio: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        portfolio: "virginia.edu",
        resume: "bluehost.com",
        linedin: "sbwire.com",
        otherlinks: "senate.gov",
        location: "Omišalj, CA",
        relocate: true,
        candidateId: 7
        },
        {
        id: 8,
        bio: "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        portfolio: "merriam-webster.com",
        resume: "telegraph.co.uk",
        linedin: "meetup.com",
        otherlinks: "intel.com",
        location: "Heilbronn, CA",
        relocate: true,
        candidateId: 8
        },
        {
        id: 9,
        bio: "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        portfolio: "stanford.edu",
        resume: "hud.gov",
        linedin: "mayoclinic.com",
        otherlinks: "nih.gov",
        location: "Yachimata, CA",
        relocate: true,
        candidateId: 9
        },
        {
        id: 10,
        bio: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        portfolio: "diigo.com",
        resume: "cargocollective.com",
        linedin: "163.com",
        otherlinks: "diigo.com",
        location: "Tanza, CA",
        relocate: true,
        candidateId: 10
        },
        {
        id: 11,
        bio: "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        portfolio: "chron.com",
        resume: "lulu.com",
        linedin: "statcounter.com",
        otherlinks: "shop-pro.jp",
        location: "Kėdainiai, CA",
        relocate: true,
        candidateId: 11
        },
        {
        id: 12,
        bio: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        portfolio: "irs.gov",
        resume: "flavors.me",
        linedin: "soundcloud.com",
        otherlinks: "homestead.com",
        location: "Wuli, CA",
        relocate: false,
        candidateId: 12
        },
        {
        id: 13,
        bio: "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        portfolio: "yahoo.com",
        resume: "ameblo.jp",
        linedin: "hubpages.com",
        otherlinks: "bluehost.com",
        location: "Västerås, CA",
        relocate: false,
        candidateId: 13
        },
        {
        id: 14,
        bio: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
        portfolio: "last.fm",
        resume: "msn.com",
        linedin: "go.com",
        otherlinks: "livejournal.com",
        location: "Lugait, CA",
        relocate: false,
        candidateId: 14
        },
        {
        id: 15,
        bio: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        portfolio: "zdnet.com",
        resume: "freewebs.com",
        linedin: "wired.com",
        otherlinks: "so-net.ne.jp",
        location: "Pandean, CA",
        relocate: false,
        candidateId: 15
        },
        {
        id: 16,
        bio: "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        portfolio: "patch.com",
        resume: "si.edu",
        linedin: "soup.io",
        otherlinks: "prweb.com",
        location: "Tulu Bolo, CA",
        relocate: false,
        candidateId: 16
        },
        {
        id: 17,
        bio: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        portfolio: "timesonline.co.uk",
        resume: "bbb.org",
        linedin: "answers.com",
        otherlinks: "clickbank.net",
        location: "Liushutun, CA",
        relocate: false,
        candidateId: 17
        },
        {
        id: 18,
        bio: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        portfolio: "rakuten.co.jp",
        resume: "jigsy.com",
        linedin: "flickr.com",
        otherlinks: "sphinn.com",
        location: "Caazapá, CA",
        relocate: true,
        candidateId: 18
        },
        {
        id: 19,
        bio: "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        portfolio: "boston.com",
        resume: "nymag.com",
        linedin: "ibm.com",
        otherlinks: "scientificamerican.com",
        location: "Riangblolong, CA",
        relocate: true,
        candidateId: 19
        },
        {
        id: 20,
        bio: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        portfolio: "acquirethisname.com",
        resume: "dion.ne.jp",
        linedin: "live.com",
        otherlinks: "nasa.gov",
        location: "Bukhovo, CA",
        relocate: true,
        candidateId: 20
        },
        {
        id: 21,
        bio: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        portfolio: "epa.gov",
        resume: "canalblog.com",
        linedin: "statcounter.com",
        otherlinks: "ucsd.edu",
        location: "Uripa, CA",
        relocate: true,
        candidateId: 21
        },
        {
        id: 22,
        bio: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        portfolio: "redcross.org",
        resume: "ifeng.com",
        linedin: "ycombinator.com",
        otherlinks: "ebay.com",
        location: "Dongtian, CA",
        relocate: false,
        candidateId: 22
        },
        {
        id: 23,
        bio: "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        portfolio: "hud.gov",
        resume: "oakley.com",
        linedin: "webnode.com",
        otherlinks: "si.edu",
        location: "Housuo, CA",
        relocate: true,
        candidateId: 23
        },
        {
        id: 24,
        bio: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        portfolio: "facebook.com",
        resume: "livejournal.com",
        linedin: "joomla.org",
        otherlinks: "tumblr.com",
        location: "Zhenwen, CA",
        relocate: false,
        candidateId: 24
        },
        {
        id: 25,
        bio: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
        portfolio: "biglobe.ne.jp",
        resume: "accuweather.com",
        linedin: "51.la",
        otherlinks: "angelfire.com",
        location: "Město, CA",
        relocate: true,
        candidateId: 25
        },
        {
        id: 26,
        bio: "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        portfolio: "webmd.com",
        resume: "newyorker.com",
        linedin: "uol.com.br",
        otherlinks: "sbwire.com",
        location: "Žagarė, CA",
        relocate: true,
        candidateId: 26
        },
        {
        id: 27,
        bio: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        portfolio: "baidu.com",
        resume: "freewebs.com",
        linedin: "comcast.net",
        otherlinks: "godaddy.com",
        location: "Vodyane, CA",
        relocate: true,
        candidateId: 27
        },
        {
        id: 28,
        bio: "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        portfolio: "surveymonkey.com",
        resume: "cnet.com",
        linedin: "tiny.cc",
        otherlinks: "pagesperso-orange.fr",
        location: "Urshel’skiy, CA",
        relocate: true,
        candidateId: 28
        },
        {
        id: 29,
        bio: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        portfolio: "dyndns.org",
        resume: "booking.com",
        linedin: "xinhuanet.com",
        otherlinks: "google.com",
        location: "Siquanpu, CA",
        relocate: true,
        candidateId: 29
        },
        {
        id: 30,
        bio: "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        portfolio: "com.com",
        resume: "apple.com",
        linedin: "nasa.gov",
        otherlinks: "ucoz.com",
        location: "Udi, CA",
        relocate: true,
        candidateId: 30
        },
        {
        id: 31,
        bio: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        portfolio: "simplemachines.org",
        resume: "about.com",
        linedin: "google.it",
        otherlinks: "cornell.edu",
        location: "Náousa, CA",
        relocate: false,
        candidateId: 31
        },
        {
        id: 32,
        bio: "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        portfolio: "hexun.com",
        resume: "elegantthemes.com",
        linedin: "shareasale.com",
        otherlinks: "hp.com",
        location: "San Javier, CA",
        relocate: true,
        candidateId: 32
        },
        {
        id: 33,
        bio: "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        portfolio: "uiuc.edu",
        resume: "desdev.cn",
        linedin: "google.ru",
        otherlinks: "a8.net",
        location: "Orléans, CA",
        relocate: true,
        candidateId: 33
        },
        {
        id: 34,
        bio: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        portfolio: "cbslocal.com",
        resume: "google.fr",
        linedin: "cnn.com",
        otherlinks: "amazon.co.uk",
        location: "Al Khawkhah, CA",
        relocate: false,
        candidateId: 34
        },
        {
        id: 35,
        bio: "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
        portfolio: "jugem.jp",
        resume: "harvard.edu",
        linedin: "zdnet.com",
        otherlinks: "baidu.com",
        location: "Palayan City, CA",
        relocate: true,
        candidateId: 35
        },
        {
        id: 36,
        bio: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        portfolio: "prweb.com",
        resume: "wsj.com",
        linedin: "yahoo.com",
        otherlinks: "epa.gov",
        location: "Guandu, CA",
        relocate: false,
        candidateId: 36
        },
        {
        id: 37,
        bio: "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        portfolio: "amazon.com",
        resume: "wikia.com",
        linedin: "slate.com",
        otherlinks: "miibeian.gov.cn",
        location: "Moba, CA",
        relocate: true,
        candidateId: 37
        },
        {
        id: 38,
        bio: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        portfolio: "hud.gov",
        resume: "ebay.com",
        linedin: "godaddy.com",
        otherlinks: "deviantart.com",
        location: "Noebana, CA",
        relocate: false,
        candidateId: 38
        },
        {
        id: 39,
        bio: "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        portfolio: "senate.gov",
        resume: "nps.gov",
        linedin: "booking.com",
        otherlinks: "odnoklassniki.ru",
        location: "Kiambu, CA",
        relocate: false,
        candidateId: 39
        },
        {
        id: 40,
        bio: "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        portfolio: "ucla.edu",
        resume: "flickr.com",
        linedin: "seesaa.net",
        otherlinks: "twitpic.com",
        location: "Savigny-le-Temple, CA",
        relocate: false,
        candidateId: 40
        },
        {
        id: 41,
        bio: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
        portfolio: "census.gov",
        resume: "berkeley.edu",
        linedin: "soundcloud.com",
        otherlinks: "squarespace.com",
        location: "Xinming, CA",
        relocate: false,
        candidateId: 41
        },
        {
        id: 42,
        bio: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        portfolio: "timesonline.co.uk",
        resume: "ucsd.edu",
        linedin: "upenn.edu",
        otherlinks: "amazon.co.jp",
        location: "Tiznit, CA",
        relocate: true,
        candidateId: 42
        },
        {
        id: 43,
        bio: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        portfolio: "earthlink.net",
        resume: "goodreads.com",
        linedin: "sphinn.com",
        otherlinks: "java.com",
        location: "Subaykhān, CA",
        relocate: false,
        candidateId: 43
        },
        {
        id: 44,
        bio: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
        portfolio: "blogger.com",
        resume: "flickr.com",
        linedin: "e-recht24.de",
        otherlinks: "gov.uk",
        location: "Ma’an, CA",
        relocate: true,
        candidateId: 44
        },
        {
        id: 45,
        bio: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        portfolio: "freewebs.com",
        resume: "google.com.au",
        linedin: "stumbleupon.com",
        otherlinks: "cbslocal.com",
        location: "Tegalagung, CA",
        relocate: false,
        candidateId: 45
        },
        {
        id: 46,
        bio: "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        portfolio: "lycos.com",
        resume: "dedecms.com",
        linedin: "senate.gov",
        otherlinks: "java.com",
        location: "Yur’yev-Pol’skiy, CA",
        relocate: true,
        candidateId: 46
        },
        {
        id: 47,
        bio: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        portfolio: "people.com.cn",
        resume: "adobe.com",
        linedin: "usnews.com",
        otherlinks: "ca.gov",
        location: "Remas, CA",
        relocate: false,
        candidateId: 47
        },
        {
        id: 48,
        bio: "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        portfolio: "amazon.com",
        resume: "nifty.com",
        linedin: "japanpost.jp",
        otherlinks: "google.cn",
        location: "Stockholm, CA",
        relocate: false,
        candidateId: 48
        },
        {
        id: 49,
        bio: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        portfolio: "google.ru",
        resume: "berkeley.edu",
        linedin: "about.me",
        otherlinks: "nytimes.com",
        location: "La Playosa, CA",
        relocate: true,
        candidateId: 49
        },
        {
        id: 50,
        bio: "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        portfolio: "ucla.edu",
        resume: "hatena.ne.jp",
        linedin: "fastcompany.com",
        otherlinks: "printfriendly.com",
        location: "Pantang, CA",
        relocate: true,
        candidateId: 50
        }
        ]);
    });
};
