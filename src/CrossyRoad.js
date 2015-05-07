/*
 * Copyright 2015 if(Team);
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author ChalkPE <amato0617@gmail.com>
 * @since 2015-05-07 21:21
 */
var CrossyRoad = (function(){
    const VERSION = "0.1-SNAPSHOT";
    const NAME    = "CrossyRoad";

    var enabled = false;

    function isValidWorld(){
        return Level.getWorldDir() === NAME && Level.getWorldName() === NAME;
    }

    return {
        VERSION: VERSION,
        NAME: NAME,

        isEnabled: function(){
            return enabled;
        },

        initialize: function(){
            if(!isValidWorld()){
                print("Please enter the world named \"CrossyRoad\", or disable this script!");
                return;
            }

            enabled = true;
        },

        finalize: function(){
            //TODO: Implement this method

            enabled = false;
        }
    };
}()); Object.freeze(CrossyRoad);


function selectLevelHook(){
    if(!CrossyRoad.isEnabled()){
        CrossyRoad.initialize();
    }
}

function leaveGame(){
    if(CrossyRoad.isEnabled()){
        CrossyRoad.finalize();
    }
}

function entityAddedHook(entity){
    if(Player.isPlayer(entity)){
        return;
    }

    Entity.remove(entity);
    //TODO: Better removing system for entity auto-spawning
}


function useItem(){
    if(CrossyRoad.isEnabled()){
        preventDefault();
    }
}

function destroyBlock(){
    if(CrossyRoad.isEnabled()){
        preventDefault();
    }
}

function startDestroyBlock(){
    if(CrossyRoad.isEnabled()){
        preventDefault();
    }
}

function attackHook(){
    if(CrossyRoad.isEnabled()){
        preventDefault();
    }
}


//Used callbacks
void([selectLevelHook, leaveGame, useItem, destroyBlock, startDestroyBlock, attackHook, entityAddedHook]);