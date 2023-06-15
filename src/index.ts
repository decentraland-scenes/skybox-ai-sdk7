import { MeshCollider, Transform, engine,  InputAction, Material, MeshRenderer, PointerEventType, inputSystem } from '@dcl/sdk/ecs'
import { movePlayerTo } from '~system/RestrictedActions'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { height, sceneSizeX, sceneSizeZ, radiusMultiplier } from './resources'








//#region SkyBox
const folderNumber = "5"

//root
export let skyboxRoot = engine.addEntity()
Transform.create(skyboxRoot)

//front
export let skyboxPZ = engine.addEntity()
Transform.create(skyboxPZ, {
    position: Vector3.create(0, 0, sceneSizeZ/2 * radiusMultiplier),
    scale: Vector3.create(sceneSizeX * radiusMultiplier,height * radiusMultiplier,sceneSizeZ * radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxPZ)
Material.setBasicMaterial(skyboxPZ, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/pz.png" 
    })
  })

//back
export let skyboxNZ = engine.addEntity()
Transform.create(skyboxNZ, {
    position: Vector3.create(0, 0, -sceneSizeZ/2 * radiusMultiplier),
    rotation: Quaternion.fromEulerDegrees(0,180,0),
    scale: Vector3.create(sceneSizeX* radiusMultiplier,height* radiusMultiplier,sceneSizeZ* radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxNZ)
Material.setBasicMaterial(skyboxNZ, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/nz.png" 
    })
  })

//Top
export let skyboxPY = engine.addEntity()
Transform.create(skyboxPY, {
    position: Vector3.create(0, height/2* radiusMultiplier, 0),
    rotation: Quaternion.fromEulerDegrees(-90,0,0),
    scale: Vector3.create(sceneSizeX* radiusMultiplier,height* radiusMultiplier,sceneSizeZ* radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxPY)
Material.setBasicMaterial(skyboxPY, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/py.png" 
    })
  })

//Bottom
export let skyboxNY = engine.addEntity()
Transform.create(skyboxNY, {
    position: Vector3.create(0, -height/2* radiusMultiplier, 0),
    rotation: Quaternion.fromEulerDegrees(90,0,0),
    scale: Vector3.create(sceneSizeX* radiusMultiplier,height* radiusMultiplier,sceneSizeZ* radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxNY)
Material.setBasicMaterial(skyboxNY, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/ny.png" 
    })
  })

//Right
export let skyboxPX = engine.addEntity()
Transform.create(skyboxPX, {
    position: Vector3.create(sceneSizeX/2* radiusMultiplier, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0,90,0),
    scale: Vector3.create(sceneSizeX* radiusMultiplier,height* radiusMultiplier,sceneSizeZ* radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxPX)
Material.setBasicMaterial(skyboxPX, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/px.png" 
    })
  })

// Left
export let skyboxNX = engine.addEntity()
Transform.create(skyboxNX, {
    position: Vector3.create(-sceneSizeX/2* radiusMultiplier, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0,-90,0),
    scale: Vector3.create(sceneSizeX* radiusMultiplier,height* radiusMultiplier,sceneSizeZ* radiusMultiplier),
    parent: skyboxRoot
})
MeshRenderer.setPlane(skyboxNX)
Material.setBasicMaterial(skyboxNX, {
    texture: Material.Texture.Common({
      src: "images/skybox/"+ folderNumber +"/nx.png" 
    })
  })
//#endregion


engine.addSystem(() => {
  const meshEntities = engine.getEntitiesWith(MeshCollider)
  for (const [entity] of meshEntities) {
    

      if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, entity)) {
      const transform = Transform.getMutable(engine.PlayerEntity)

      transform.position = Vector3.create(sceneSizeX/2,height/2 +10,sceneSizeX/2)
    }
  }
})

engine.addSystem(() => {
    
  Transform.getMutable(skyboxRoot).position = Transform.get(engine.PlayerEntity).position
})

let elevatedPlatform = engine.addEntity()
Transform.create(elevatedPlatform, {
    position: Vector3.create(sceneSizeX/2,height/2,sceneSizeZ/2),
    scale: Vector3.create(16,1,16)
})
MeshCollider.setBox(elevatedPlatform)

movePlayerTo({newRelativePosition: Vector3.create(sceneSizeX/2,height/2 + 5,sceneSizeZ/2)})