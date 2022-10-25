function drawTreeData() {
  const treeData = getTreeData();
  if (!treeData) return;
  $("#treeName").text(treeData.name);
  $("#scientificName").text(treeData.scientificName);
  $("#treeUse").text(treeData.use);
  $("#treeImgContainer").html(
    treeData.imgs
      .map((img) => `<img src="${img}" alt="${treeData.name}">`)
      .join("")
  );
  $("#form").text(treeData.form);
  $("#size").text(treeData.size);
  $("#color").text(treeData.color);
  $("#fruit").text(treeData.fruit);
  $("#flower").text(treeData.flower);
  $("#color").text(treeData.fallColor);
  $("#tolerates").text(treeData.tolerances);
  $("#growthRate").text(treeData.growthRate);
  $("#region").text(treeData.nativeRegion);
  $("#notes").text(treeData.notes);
}
function getTreeData() {
  const treeIndex = getTreeIndex() ? Number(getTreeIndex()) : -1;
  if (treeIndex < 1) return;
  return trees.find((tree) => tree.id == treeIndex);
}

function getTreeIndex() {
  const url = window.location.href;
  return url.split("?")[1].split("=")[1];
}
