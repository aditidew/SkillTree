#include "SkillNode.h"

SkillNode::SkillNode(std::string name) : name(name) {}

SkillNode::~SkillNode() {
    for (auto child : children) {
        delete child;
    }
}

void SkillNode::addChild(SkillNode* child) {
    children.push_back(child);
}

SkillNode* SkillNode::findNode(std::string nodeName) {
    if (name == nodeName) return this;
    for (auto child : children) {
        SkillNode* result = child->findNode(nodeName);
        if (result) return result;
    }
    return nullptr;
}

std::string SkillNode::getName() const {
    return name;
}
