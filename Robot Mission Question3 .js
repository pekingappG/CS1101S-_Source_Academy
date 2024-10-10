// Your program here.// Your program here.

function go_forward(distance_cm){
    ev3_runForTime(ev3_motorA(), 198 * distance_cm, 104);

    ev3_runForTime(ev3_motorB(), 198 * distance_cm, 104);
    
    ev3_pause(198 * distance_cm + 1000);
}

function turn_left() {
    ev3_runForTime(ev3_motorA(), 1285, -104);
    ev3_runForTime(ev3_motorB(), 1285, 104);
    ev3_pause(2080);
}

function turn_right() {
    ev3_runForTime(ev3_motorA(), 1285, 104);
    ev3_runForTime(ev3_motorB(), 1285, -104);
    ev3_pause(2080);
}

const first_turn_right = math_random() > 0.5;

while(true) {
    distance = ev3_ultrasonicSensorDistance(
                    ev3_ultrasonicSensor());
    display(distance); 
    
    go_forward(5);
    
    
    if (distance <= 10) {
        ev3_motorSetStopAction(ev3_motorA(), "brake");
        ev3_motorSetStopAction(ev3_motorB(), "brake");
        if(first_turn_right){
            turn_right();
        }else{
            turn_left();
        }
        break;
    } 
    
    ev3_pause(1);
}

while(true) {
    distance = ev3_ultrasonicSensorDistance(
                    ev3_ultrasonicSensor());
    display(distance); 
    
    go_forward(5);
    
    
    if (distance === 0) {
        ev3_runForTime(ev3_motorA(), 1980, 104);
        ev3_runForTime(ev3_motorB(), 1980, 104);
        ev3_motorSetStopAction(ev3_motorA(), "brake");
        ev3_motorSetStopAction(ev3_motorB(), "brake");
        if(first_turn_right){
            turn_left();
        }else{
            turn_right();
        }
        break;
    } 
    
    ev3_pause(1);
}

go_forward(20);





