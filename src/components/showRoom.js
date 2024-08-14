export const showRoom = (roomType) => {
    const rooms = {
      single: {
        type: 'ห้องเดี่ยว',
        price: 1000,
        info: 'ห้องเดี่ยวสำหรับ 1 คน',
      },
      double: {
        type: 'ห้องคู่',
        price: 2000,
        info: 'ห้องคู่สำหรับ 2 คน',
      }
    };
  
    return rooms[roomType];
  };
  