//import * as utils from '@dcl/ecs-scene-utils';
import { GltfContainer, Transform, engine } from '@dcl/sdk/ecs';
import { Quaternion, Vector3 } from '@dcl/sdk/math';

//
// Most of the code on this file have been generated through Decentraland Builder.
// https://builder.decentraland.org/
//

export const _scene = engine.addEntity()//new Entity('_scene')

const viewSourceBlock = engine.addEntity()// new Entity('multicolorPattern')
//engine.addEntity(viewSourceBlock)
Transform.create(viewSourceBlock,
  {
    position: Vector3.create(8, 0.7, 1.5),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: _scene
  })
GltfContainer.create(viewSourceBlock
    ,{src:"models/multicolor_pattern.glb",createPointerColliders:true})

/*
viewSourceBlock.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)));
viewSourceBlock.addComponent(
    new OnPointerDown(
        () => openExternalURL("https://github.com/colyseus/decentraland"),
        { hoverText: "View source-code" }
    )
);*/

//engine.addEntity(_scene)
Transform.create(_scene,{
  position: Vector3.create(0, 0, 0),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1)
})

const largeRoundBrickGrassBed = engine.addEntity()//new Entity('largeRoundBrickGrassBed')


Transform.create(largeRoundBrickGrassBed,{
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})

GltfContainer.create(largeRoundBrickGrassBed,{src:"models/GrassPatchLarge_01/GrassPatchLarge_01.glb"})


export const floor = engine.addEntity()//new Entity('entity')

GltfContainer.create(floor,{src:"models/FloorBaseGrass_02/FloorBaseGrass_02.glb"})


Transform.create(floor,{
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})

const dandelion = engine.addEntity()//new Entity('dandelion')


Transform.create(dandelion,{
  position: Vector3.create(8, 0, 5.5),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})

GltfContainer.create(dandelion,{src:"models/Grass_04/Grass_04.glb"})

const birdSNestFern = engine.addEntity()//new Entity('birdSNestFern')


Transform.create(birdSNestFern,{
  position: Vector3.create(5.5, 0, 8.5),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})

GltfContainer.create(birdSNestFern,{src:"models/Plant_01/Plant_01.glb"})

const triSpikeGrass = engine.addEntity()//new Entity('triSpikeGrass')


Transform.create(triSpikeGrass,{
  position: Vector3.create(6, 0, 9.5),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})

GltfContainer.create(triSpikeGrass,{src:"models/Grass_05/Grass05.glb"})


const triSpikeGrass2 = engine.addEntity()//new Entity('triSpikeGrass2')


Transform.create(triSpikeGrass2,{
  position: Vector3.create(10.5, 0, 8.5),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1),
  parent:_scene
})


const grassRow = engine.addEntity()//new Entity('grassRow')


Transform.create(grassRow,{
  position: Vector3.create(0.5, 0, 8),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 3),
  parent:_scene
})

GltfContainer.create(grassRow,{src:"models/BushPatch_01/BushPatch_01.glb"})

const grassRow2 = engine.addEntity()//new Entity('grassRow2')
Transform.create(grassRow2,{
  position: Vector3.create(15.5, 0, 8),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 3),
  parent:_scene
})
GltfContainer.create(grassRow2,{src:"models/BushPatch_01/BushPatch_01.glb"})

const grassRow3 = engine.addEntity()//new Entity('grassRow3')


Transform.create(grassRow3,{
  position: Vector3.create(8, 0, 15.5),
  rotation: Quaternion.create(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: Vector3.create(1.0000004768371582, 1, 3.000001907348633),
  parent:_scene
})

GltfContainer.create(grassRow3,{src:"models/BushPatch_01/BushPatch_01.glb"})

const grassRow4 = engine.addEntity()//new Entity('grassRow4')


Transform.create(grassRow4,{
  position: Vector3.create(8, 0, 0.5),
  rotation: Quaternion.create(1.7572238474294335e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: Vector3.create(1.0000007152557373, 1, 3.0000038146972656),
  parent:_scene
})

GltfContainer.create(grassRow4,{src:"models/BushPatch_01/BushPatch_01.glb"})