const deleteMember = (listId, memberId, members, setMembers) => {
  const updatedMembers = members.map((list) => {
    if (list.id === listId) {
      return {
        ...list,
        members: list.members.filter((member) => member.id !== memberId),
      };
    }
    return list;
  });

  setMembers(updatedMembers);
};

export default deleteMember;
