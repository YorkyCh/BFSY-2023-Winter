export default function getOwnerById(list) {
  const foundList = list;
  if (foundList) {
    const owner = foundList.members.find((member) => member.role === "Owner");
    return owner;
  } else {
    return null;
  }
}
