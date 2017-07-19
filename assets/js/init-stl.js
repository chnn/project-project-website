/* global THREE */

document.querySelectorAll(".stl-container").forEach(function(el) {
  initSTLContainer(el);
});

function initSTLContainer(container) {
  var scene = new THREE.Scene();
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  var camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  var cameraControls = new THREE.OrbitControls(camera, renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setClearColor("white");

  camera.position.z = 1.5;
  cameraControls.target.set(0, 0, 0);
  cameraControls.addEventListener("change", render);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 1.35);

  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  scene.add(new THREE.AmbientLight("#7f8c8d"));

  function addGeometryToScene(geometry) {
    var material = new THREE.MeshLambertMaterial({ color: "#2980b9" });
    var mesh = new THREE.Mesh(geometry, material);

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    mesh.scale.set(0.013, 0.013, 0.013);

    var box = new THREE.Box3().setFromObject(mesh);
    var pos = (new THREE.Vector3()).addVectors(box.min, box.max).divideScalar(2);

    mesh.position.set(-pos.x, -pos.y, -pos.z);

    scene.add(mesh);
    container.className += " loaded";

    render();
  }

  function render() {
    renderer.render(scene, camera);
  }

  var filename = container.dataset.filename.trim();
  var loader = new THREE.STLLoader();

  loader.load(filename, addGeometryToScene);

  render();
  container.appendChild(renderer.domElement);
}
