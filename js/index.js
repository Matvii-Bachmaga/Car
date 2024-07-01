const car = {
    carName: "Honda",
    carModel: "Civic",
    manufactYear: 2021,
    isEngineStarted: false,
    fuelTank: 15,
    accumCapacity: 70,
    key: false,
    keySwitch: function () {
        this.key = (this.key) ? false : true
        if (!this.key) this.isEngineStarted = false
    },
    startEngine: function () {
        if (!this.key) this.keySwitch()
        if (this.key && this.accumCapacity > 10 && this.fuelTank > 0) {
            this.isEngineStarted = true;
            alert("Машина завелась");
        } else {
            if (this.accumCapacity <= 10) alert("Не вистачає енергії")
            if (this.fuelTank <= 0) alert("Не вистачає палива")
        }
    },
    checkFuel: function () {
        console.log(`Поточний рівень палива: ${this.fuelTank} л`);
    },
    checkBattery: function () {
        console.log(`Поточний рівень заряду аккумулятора: ${this.accumCapacity}`);
    },
    getInfo: function () {
        let engineStatus = this.isEngineStarted ? "Запущений" : "Заглушений";
        return `Марка: ${this.carName}, Модель: ${this.carModel}, Рік випуску: ${this.manufactYear}, Статус двигуна: ${engineStatus}`;
    }
}

console.log(car);
console.log(car.checkFuel());
console.log(car.checkBattery())
console.log(car.getInfo());