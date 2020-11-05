import { ifcClass } from "../../utils/globalProperties.js";
import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

const IfcSurfaceStyleRendering = {
  [ifcClass]: getName(t.IfcSurfaceStyleRendering),
  SurfaceColour: d.id,
  Transparency: d.ifcValue,
  DiffuseColour: d.ifcValue,
  TransmissionColour: d.ifcValue,
  DiffuseTransmissionColour: d.ifcValue,
  ReflectionColour: d.ifcValue,
  SpecularColour: d.ifcValue,
  SpecularHighlight: d.ifcValue,
  ReflectanceMethod: d.enum,
};

export { IfcSurfaceStyleRendering };
