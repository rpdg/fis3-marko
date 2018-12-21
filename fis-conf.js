fis.match("**.marko", {
	parser: fis.plugin("marko4", {
        define: {
            "projectName": "OPG Video Cloud",
            "lists": [1, 2, 3],
            "object2": {
                "id": 1,
                "name": 'objectName'
            },
            "title": "title -define in fis-conf",
            "1.html": {
                "title": "1.html title-11"
            },
            "page/": {
                "obj_page2": {
                    a: 1
                },
                "title": "title2 -define in fis-conf -> page",
                "2.html": {
                    "lists": ["d01", "d02"],
                    "title": "d- title-02",
                    "obj_page2": {
                        bb: 12
                    }
                },
                "admin/": {
                    "obj_page2": {
                        a: 222
                    },
                    "3.html": {
                        "obj_page2": {
                            cc: 333
                        }
                    }
                }
            }
        }
	}),
	rExt: '.html'
});


fis.match('{/comm/*.*,*.json}', {
	release: false
});
