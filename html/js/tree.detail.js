drawTreeData();
function drawTreeData() {
	const treeData = getTreeData();
	if (!treeData) return;
	$('#treeName').text(treeData.name);
	$('#scientificName').text(treeData.scientificName);
	$('#treeUse').text(treeData.use);
	$('#treeImgContainer').html(treeData.imgs.map((img) => `<img src="${img}" alt="${treeData.name}">`).join(''));
	$('#form').text(treeData.form);
	$('#size').text(treeData.size);
	$('#color').text(treeData.color);
	$('#fruit').text(treeData.fruit);
	$('#flower').text(treeData.flower);
	$('#color').text(treeData.fallColor);
	$('#tolerates').text(treeData.tolerates);
	$('#growthRate').text(treeData.growthRate);
	$('#region').text(treeData.region);
	$('#notes').text(treeData.notes);
}
function getTreeData() {
	const treeIndex = getTreeIndex() ? Number(getTreeIndex()) : -1;
	if (treeIndex < 0) return;
	return trees.find((tree) => tree.id == treeIndex);
}

function getTreeIndex() {
	return window.location.search.split('=')[1];
}
