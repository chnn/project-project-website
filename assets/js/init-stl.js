document.querySelectorAll('.stl-container').forEach(function(el) {
	initSTLContainer(el);
});

function initSTLContainer(container) {
	var scene, camera, cameraControls, renderer;

	function loadSTL(url) {
		var loader = new THREE.STLLoader();

		loader.load(url, function(geometry) {
			var material = new THREE.MeshLambertMaterial({ color: '#2980b9' });
			var mesh = new THREE.Mesh(geometry, material);

			geometry.computeFaceNormals();
			geometry.computeVertexNormals();

			mesh.scale.set(0.013, 0.013, 0.013);

			var box = new THREE.Box3().setFromObject(mesh);
			var pos = (new THREE.Vector3()).addVectors(box.min, box.max).divideScalar(2);

			mesh.position.set(-pos.x, -pos.y, -pos.z);

			scene.add(mesh);
			container.className += " loaded";
		});
	}

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}

	renderer = new THREE.WebGLRenderer({ antialias: true });
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
	cameraControls = new THREE.OrbitControls(camera, renderer.domElement);

	container.appendChild(renderer.domElement);
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(container.offsetWidth, container.offsetHeight);
	renderer.setClearColor('white');

	camera.position.z = 1.5;
	cameraControls.target.set(0, 0, 0);
	cameraControls.addEventListener('change', animate);

	scene.add(new THREE.AmbientLight('#7f8c8d'));

	var directionalLight = new THREE.DirectionalLight(0xffffff, 1.35);

	directionalLight.position.set(1, 1, 1);
	scene.add(directionalLight);

	loadSTL(container.dataset.filename);
	animate();
}
